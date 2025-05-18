import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    mainCategoryId = "mainCategoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
