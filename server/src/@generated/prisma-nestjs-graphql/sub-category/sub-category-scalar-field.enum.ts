import { registerEnumType } from '@nestjs/graphql';

export enum SubCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    categoryId = "categoryId",
    image = "image",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SubCategoryScalarFieldEnum, { name: 'SubCategoryScalarFieldEnum', description: undefined })
