import { registerEnumType } from '@nestjs/graphql';

export enum ProductAttributeVariantScalarFieldEnum {
    id = "id",
    selected = "selected",
    productId = "productId",
    productAttributeId = "productAttributeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductAttributeVariantScalarFieldEnum, { name: 'ProductAttributeVariantScalarFieldEnum', description: undefined })
