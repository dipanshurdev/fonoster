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
import { Prisma } from "../db";
import { getAccessKeyIdFromToken } from "../utils";
import { getTokenFromCall } from "../utils/getTokenFromCall";

const logger = getLogger({ service: "identity", filePath: __filename });

type GetUserByIdRequest = {
  id: string;
};

type GetUserByIdResponse = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
};

function getUserById(prisma: Prisma) {
  return async (
    call: { request: GetUserByIdRequest },
    callback: (error: GRPCErrors, response?: GetUserByIdResponse) => void
  ) => {
    try {
      const { id } = call.request;
      const token = getTokenFromCall(
        call as unknown as grpc.ServerInterceptingCall
      );
      const accessKeyId = getAccessKeyIdFromToken(token);

      logger.verbose("getting user by id", { id, accessKeyId });

      const user = await prisma.user.findUnique({
        where: {
          id,
          accessKeyId
        }
      });

      if (!user) {
        callback({ code: status.NOT_FOUND, message: "User not found" });
        return;
      }

      const response: GetUserByIdResponse = {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };

      callback(null, response);
    } catch (error) {
      handleError(error, callback);
    }
  };
}

export { getUserById };