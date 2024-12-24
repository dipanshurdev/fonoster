
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  ref: 'ref',
  accessKeyId: 'accessKeyId',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  password: 'password',
  phoneNumber: 'phoneNumber',
  phoneNumberVerified: 'phoneNumberVerified',
  avatar: 'avatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  extended: 'extended'
};

exports.Prisma.WorkspaceScalarFieldEnum = {
  ref: 'ref',
  accessKeyId: 'accessKeyId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ownerRef: 'ownerRef'
};

exports.Prisma.WorkspaceMemberScalarFieldEnum = {
  ref: 'ref',
  status: 'status',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userRef: 'userRef',
  workspaceRef: 'workspaceRef'
};

exports.Prisma.ApiKeyScalarFieldEnum = {
  ref: 'ref',
  accessKeyId: 'accessKeyId',
  accessKeySecret: 'accessKeySecret',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  expiresAt: 'expiresAt',
  workspaceRef: 'workspaceRef'
};

exports.Prisma.VerificationCodeScalarFieldEnum = {
  ref: 'ref',
  type: 'type',
  code: 'code',
  value: 'value',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.VerificationType = exports.$Enums.VerificationType = {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE'
};

exports.WorkspaceMemberStatus = exports.$Enums.WorkspaceMemberStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE'
};

exports.WorkspaceMemberRole = exports.$Enums.WorkspaceMemberRole = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.ApiKeyRole = exports.$Enums.ApiKeyRole = {
  WORKSPACE_ADMIN: 'WORKSPACE_ADMIN'
};

exports.Prisma.ModelName = {
  User: 'User',
  Workspace: 'Workspace',
  WorkspaceMember: 'WorkspaceMember',
  ApiKey: 'ApiKey',
  VerificationCode: 'VerificationCode'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/psanders/Projects/fonoster/mods/identity/src/generated/@prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-arm64-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-arm64-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/psanders/Projects/fonoster/mods/identity/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../../../.env"
  },
  "relativePath": "../../../..",
  "clientVersion": "6.1.0",
  "engineVersion": "11f085a2012c0f4778414c8db2651556ee0ef959",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "IDENTITY_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"src/generated/@prisma/client\"\n  binaryTargets = [\"native\", \"linux-arm64-openssl-3.0.x\", \"linux-musl-arm64-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"IDENTITY_DATABASE_URL\")\n}\n\nmodel User {\n  ref                 String   @id @default(uuid())\n  accessKeyId         String   @unique @map(\"access_key_id\") @db.VarChar(255)\n  name                String   @db.VarChar(60)\n  email               String   @unique @db.VarChar(255)\n  emailVerified       Boolean  @default(false) @map(\"email_verified\")\n  password            String   @map(\"password_hash\") /// @encrypted\n  phoneNumber         String?  @map(\"phone_number\") @db.VarChar(20)\n  phoneNumberVerified Boolean  @default(false) @map(\"phone_number_verified\")\n  avatar              String?  @db.VarChar(255)\n  createdAt           DateTime @default(now()) @map(\"created_at\") @db.Timestamptz(3)\n  updatedAt           DateTime @default(now()) @map(\"updated_at\") @db.Timestamptz(3)\n  extended            Json?\n\n  // Relations\n  ownedWorkspaces Workspace[] // Workspaces owned by the user\n  memberships     WorkspaceMember[] // Workspaces the user is a member of\n\n  // Indexes and maps\n  @@index([email], type: Hash)\n  @@index([accessKeyId], type: Hash)\n  @@map(\"users\")\n}\n\nmodel Workspace {\n  ref         String   @id @default(uuid())\n  accessKeyId String   @unique @map(\"access_key_id\") @db.VarChar(255)\n  name        String   @db.VarChar(60)\n  createdAt   DateTime @default(now()) @map(\"created_at\") @db.Timestamptz(3)\n  updatedAt   DateTime @default(now()) @map(\"updated_at\") @db.Timestamptz(3)\n\n  // Relations\n  owner    User              @relation(fields: [ownerRef], references: [ref], onDelete: Cascade)\n  ownerRef String            @map(\"owner_ref\")\n  members  WorkspaceMember[]\n  apiKeys  ApiKey[]\n\n  // Indexes and maps\n  @@index([accessKeyId], type: Hash)\n  @@index([ownerRef], type: Hash)\n  @@map(\"workspaces\")\n}\n\nmodel WorkspaceMember {\n  ref       String                @id @default(uuid())\n  status    WorkspaceMemberStatus @default(PENDING)\n  role      WorkspaceMemberRole   @default(USER)\n  createdAt DateTime              @default(now()) @map(\"created_at\") @db.Timestamptz(3)\n  updatedAt DateTime              @default(now()) @map(\"updated_at\") @db.Timestamptz(3)\n\n  // Relations\n  user         User      @relation(fields: [userRef], references: [ref], onDelete: Cascade)\n  userRef      String    @map(\"user_ref\")\n  workspace    Workspace @relation(fields: [workspaceRef], references: [ref], onDelete: Cascade)\n  workspaceRef String    @map(\"workspace_ref\")\n\n  @@unique([userRef, workspaceRef])\n  @@map(\"workspace_members\")\n}\n\nmodel ApiKey {\n  ref             String     @id @default(uuid())\n  accessKeyId     String     @unique @map(\"access_key_id\") @db.VarChar(255)\n  accessKeySecret String     @map(\"access_key_secret\") @db.VarChar(255) /// @encrypted\n  role            ApiKeyRole @default(WORKSPACE_ADMIN)\n  createdAt       DateTime   @default(now()) @map(\"created_at\") @db.Timestamptz(3)\n  updatedAt       DateTime   @default(now()) @map(\"updated_at\") @db.Timestamptz(3)\n  expiresAt       DateTime?  @map(\"expires_at\") @db.Timestamptz(3)\n\n  // Relations\n  workspace    Workspace @relation(fields: [workspaceRef], references: [ref], onDelete: Cascade)\n  workspaceRef String    @map(\"workspace_ref\")\n\n  // Indexes and maps\n  @@index([accessKeyId], type: Hash)\n  @@index([workspaceRef], type: Hash)\n  @@map(\"api_keys\")\n}\n\nmodel VerificationCode {\n  ref       String           @id @default(uuid())\n  type      VerificationType\n  code      String           @db.VarChar(6)\n  value     String           @db.VarChar(255)\n  expiresAt DateTime         @map(\"expires_at\") @db.Timestamptz(3)\n  createdAt DateTime         @default(now()) @map(\"created_at\") @db.Timestamptz(3)\n\n  // Indexes and maps\n  @@index([code], type: Hash)\n  @@map(\"verification_codes\")\n}\n\nenum VerificationType {\n  EMAIL\n  PHONE\n}\n\nenum WorkspaceMemberStatus {\n  PENDING\n  ACTIVE\n\n  @@map(\"workspace_member_status\")\n}\n\nenum WorkspaceMemberRole {\n  OWNER\n  ADMIN\n  USER\n\n  @@map(\"workspace_member_role\")\n}\n\nenum ApiKeyRole {\n  WORKSPACE_ADMIN\n\n  @@map(\"api_key_role\")\n}\n",
  "inlineSchemaHash": "ef94e2cd4dd15b6a81258d4e9fed587ec65c675a5b3f3fabec1eddff07a436df",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "mods/identity/src/generated/@prisma/client",
    "identity/src/generated/@prisma/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessKeyId\",\"dbName\":\"access_key_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"dbName\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"dbName\":\"password_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@encrypted\"},{\"name\":\"phoneNumber\",\"dbName\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumberVerified\",\"dbName\":\"phone_number_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownedWorkspaces\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workspace\",\"nativeType\":null,\"relationName\":\"UserToWorkspace\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceMember\",\"nativeType\":null,\"relationName\":\"UserToWorkspaceMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Workspace\":{\"dbName\":\"workspaces\",\"schema\":null,\"fields\":[{\"name\":\"ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessKeyId\",\"dbName\":\"access_key_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToWorkspace\",\"relationFromFields\":[\"ownerRef\"],\"relationToFields\":[\"ref\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerRef\",\"dbName\":\"owner_ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceMember\",\"nativeType\":null,\"relationName\":\"WorkspaceToWorkspaceMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apiKeys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApiKey\",\"nativeType\":null,\"relationName\":\"ApiKeyToWorkspace\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkspaceMember\":{\"dbName\":\"workspace_members\",\"schema\":null,\"fields\":[{\"name\":\"ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WorkspaceMemberStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WorkspaceMemberRole\",\"nativeType\":null,\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToWorkspaceMember\",\"relationFromFields\":[\"userRef\"],\"relationToFields\":[\"ref\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userRef\",\"dbName\":\"user_ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workspace\",\"nativeType\":null,\"relationName\":\"WorkspaceToWorkspaceMember\",\"relationFromFields\":[\"workspaceRef\"],\"relationToFields\":[\"ref\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceRef\",\"dbName\":\"workspace_ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userRef\",\"workspaceRef\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userRef\",\"workspaceRef\"]}],\"isGenerated\":false},\"ApiKey\":{\"dbName\":\"api_keys\",\"schema\":null,\"fields\":[{\"name\":\"ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessKeyId\",\"dbName\":\"access_key_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessKeySecret\",\"dbName\":\"access_key_secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@encrypted\"},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ApiKeyRole\",\"nativeType\":null,\"default\":\"WORKSPACE_ADMIN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"dbName\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workspace\",\"nativeType\":null,\"relationName\":\"ApiKeyToWorkspace\",\"relationFromFields\":[\"workspaceRef\"],\"relationToFields\":[\"ref\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceRef\",\"dbName\":\"workspace_ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VerificationCode\":{\"dbName\":\"verification_codes\",\"schema\":null,\"fields\":[{\"name\":\"ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"VerificationType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"dbName\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"3\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"VerificationType\":{\"values\":[{\"name\":\"EMAIL\",\"dbName\":null},{\"name\":\"PHONE\",\"dbName\":null}],\"dbName\":null},\"WorkspaceMemberStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null}],\"dbName\":\"workspace_member_status\"},\"WorkspaceMemberRole\":{\"values\":[{\"name\":\"OWNER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null}],\"dbName\":\"workspace_member_role\"},\"ApiKeyRole\":{\"values\":[{\"name\":\"WORKSPACE_ADMIN\",\"dbName\":null}],\"dbName\":\"api_key_role\"}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "mods/identity/src/generated/@prisma/client/libquery_engine-darwin-arm64.dylib.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "mods/identity/src/generated/@prisma/client/libquery_engine-linux-arm64-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "mods/identity/src/generated/@prisma/client/libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "mods/identity/src/generated/@prisma/client/schema.prisma")