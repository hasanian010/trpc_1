import { registerEnumType } from '@nestjs/graphql';

export enum ProductMetaScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    metaTags = "metaTags",
    image = "image",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductMetaScalarFieldEnum, { name: 'ProductMetaScalarFieldEnum', description: undefined })
