import { registerEnumType } from '@nestjs/graphql';

export enum ValuesScalarFieldEnum {
    id = "id",
    value = "value",
    meta = "meta",
    attributeId = "attributeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ValuesScalarFieldEnum, { name: 'ValuesScalarFieldEnum', description: undefined })
