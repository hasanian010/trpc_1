import { registerEnumType } from '@nestjs/graphql';

export enum BrandScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    image = "image",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum', description: undefined })
