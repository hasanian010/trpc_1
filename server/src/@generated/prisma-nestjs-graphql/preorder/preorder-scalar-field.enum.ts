import { registerEnumType } from '@nestjs/graphql';

export enum PreorderScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    phone = "phone",
    address = "address",
    email = "email",
    productImage = "productImage",
    productUrl = "productUrl",
    note = "note",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PreorderScalarFieldEnum, { name: 'PreorderScalarFieldEnum', description: undefined })
