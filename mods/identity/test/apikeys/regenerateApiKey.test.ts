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
import * as grpc from "@grpc/grpc-js";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { createSandbox } from "sinon";
import sinonChai from "sinon-chai";
import { ApiRoleEnum } from "../../src/apikeys";
import { Prisma } from "../../src/db";
import { TEST_TOKEN } from "../testToken";

chai.use(chaiAsPromised);
chai.use(sinonChai);
const sandbox = createSandbox();

describe("@identity[apikeys/regenerateApiKey]", function () {
  afterEach(function () {
    return sandbox.restore();
  });

  it("should regenerate an ApiKey", async function () {
    // Arrange
    const metadata = new grpc.Metadata();
    metadata.set("token", TEST_TOKEN);

    const call = {
      metadata,
      request: {
        ref: "123",
        role: ApiRoleEnum.WORKSPACE_ADMIN
      }
    };

    const res = {
      ref: "123",
      accessKeyId: "accessKeyId",
      accessKeySecret: "accessKeySecret"
    };

    const prisma = {
      apiKey: {
        update: sandbox.stub().resolves(res)
      }
    } as unknown as Prisma;

    const { regenerateApiKey } = await import(
      "../../src/apikeys/regenerateApiKey_"
    );

    // Act
    await regenerateApiKey(prisma)(call, (_, response) => {
      // Assert
      expect(response).to.be.deep.equal(res);
    });
  });
});