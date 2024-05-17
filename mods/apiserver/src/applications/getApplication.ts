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
import { withAccess } from "@fonoster/identity";
import { getLogger } from "@fonoster/logger";
import { createGetFnUtil } from "./createGetFnUtil";
import { GetApplicationRequest, GetApplicationResponse } from "./types";
import { applicationWithEncodedStruct } from "./utils/applicationWithEncodedStruct";
import { Prisma } from "../db";

const logger = getLogger({ service: "apiserver", filePath: __filename });

function getApplication(prisma: Prisma) {
  const getFn = createGetFnUtil(prisma);

  return withAccess(
    async (call: {
      request: GetApplicationRequest;
    }): Promise<GetApplicationResponse> => {
      const { ref } = call.request;

      logger.verbose("call to getApplication", { ref });

      const result = await getFn(ref);

      const resultWithParsedDate = {
        ...result,
        createdAt: Date.parse(result.createdAt.toString()),
        updatedAt: Date.parse(result.updatedAt.toString())
      };

      return result ? applicationWithEncodedStruct(resultWithParsedDate) : null;
    },
    (ref: string) => getFn(ref)
  );
}

export { getApplication };
