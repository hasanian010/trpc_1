import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    gender = "gender",
    address = "address",
    country = "country",
    city = "city",
    area = "area",
    postal = "postal",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined })
