import { registerEnumType } from '@nestjs/graphql';

export enum ProductSpecificationScalarFieldEnum {
    id = "id",
    title = "title",
    value = "value",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductSpecificationScalarFieldEnum, { name: 'ProductSpecificationScalarFieldEnum', description: undefined })
