import { registerEnumType } from '@nestjs/graphql';

export enum ProductAttributeScalarFieldEnum {
    id = "id",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductAttributeScalarFieldEnum, { name: 'ProductAttributeScalarFieldEnum', description: undefined })
