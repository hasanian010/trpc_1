import { registerEnumType } from '@nestjs/graphql';

export enum ProductAttributeValuesScalarFieldEnum {
    id = "id",
    variant = "variant",
    price = "price",
    quantity = "quantity",
    image = "image",
    productId = "productId",
    productAttributeId = "productAttributeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductAttributeValuesScalarFieldEnum, { name: 'ProductAttributeValuesScalarFieldEnum', description: undefined })
