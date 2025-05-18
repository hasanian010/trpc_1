import { registerEnumType } from '@nestjs/graphql';

export enum AttributeScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AttributeScalarFieldEnum, { name: 'AttributeScalarFieldEnum', description: undefined })
