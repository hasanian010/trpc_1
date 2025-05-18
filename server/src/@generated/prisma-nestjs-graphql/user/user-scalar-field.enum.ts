import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    email = "email",
    avatar = "avatar",
    otp = "otp",
    newPhone = "newPhone",
    isVerified = "isVerified",
    isBanned = "isBanned",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
