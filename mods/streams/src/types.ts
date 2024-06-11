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
enum MessageType {
  HANGUP = 0x00,
  ID = 0x01,
  SILENCE = 0x02,
  SLIN = 0x10,
  ERROR = 0xff
}

enum ErrorCodes {
  NONE = 0x00,
  AST_HANGUP = 0x01,
  AST_FRAME_FORWARDING = 0x02,
  AST_MEMORY = 0x04,
  UNKNOWN = 0xff
}

enum EventType {
  DATA = "data",
  END = "end",
  ERROR = "error"
}

type StreamRequest = {
  ref: string;
};

export { StreamRequest, MessageType, EventType, ErrorCodes };