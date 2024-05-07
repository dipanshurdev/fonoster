/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { GRPCErrors, handleError } from "@fonoster/common";
import { getLogger } from "@fonoster/logger";
import { status } from "@grpc/grpc-js";
import * as grpc from "@grpc/grpc-js";
import { createSendEmail } from "./createSendEmail";
import { isAdminMember } from "./isAdminMember";
import { Prisma } from "../db";
import { IdentityConfig } from "../exchanges/types";
import { SendInvite } from "../invites/sendInvite";
import { getTokenFromCall } from "../utils/getTokenFromCall";
import { getUserIdFromToken } from "../utils/getUserIdFromToken";

const logger = getLogger({ service: "identity", filePath: __filename });

type ResendGroupMembershipInvitationRequest = {
  groupId: string;
  userId: string;
};

type ResendGroupMembershipInvitationResponse = {
  groupId: string;
  userId: string;
};

function resendGroupMembershipInvitation(
  prisma: Prisma,
  identityConfig: IdentityConfig,
  sendInvite: SendInvite
) {
  return async (
    call: { request: ResendGroupMembershipInvitationRequest },
    callback: (
      error: GRPCErrors,
      response?: ResendGroupMembershipInvitationResponse
    ) => void
  ) => {
    try {
      const { groupId, userId } = call.request;
      const token = getTokenFromCall(
        call as unknown as grpc.ServerInterceptingCall
      );
      const adminId = getUserIdFromToken(token);

      logger.debug("removing group member", { groupId, userId, adminId });

      const isAdmin = await isAdminMember(prisma)(groupId, adminId);

      if (!isAdmin && adminId !== userId) {
        return callback({
          code: status.PERMISSION_DENIED,
          message: "Only admins or owners can remove users from a group"
        });
      }

      const member = await prisma.groupMember.findFirst({
        where: {
          groupId,
          userId
        },
        include: {
          user: true,
          group: true
        }
      });

      if (!member) {
        return callback({
          code: status.NOT_FOUND,
          message: "User not found in group"
        });
      }

      await sendInvite(createSendEmail(identityConfig), {
        recipient: member.user.email,
        oneTimePassword: member.user.password,
        groupName: member.group.name,
        isExistingUser: true,
        // TODO: Create inviteUrl with invite token
        inviteUrl: "https://placehold.it?token=jwt"
      });

      callback(null, {
        groupId,
        userId
      });
    } catch (error) {
      handleError(error, callback);
    }
  };
}

export { resendGroupMembershipInvitation };