import { registerEnumType } from '@nestjs/graphql';

export enum MainCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    image = "image",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MainCategoryScalarFieldEnum, { name: 'MainCategoryScalarFieldEnum', description: undefined })
