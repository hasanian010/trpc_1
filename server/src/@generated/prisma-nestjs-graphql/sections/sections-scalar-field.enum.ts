import { registerEnumType } from '@nestjs/graphql';

export enum SectionsScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    publish = "publish",
    base = "base",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SectionsScalarFieldEnum, { name: 'SectionsScalarFieldEnum', description: undefined })
