import { registerEnumType } from '@nestjs/graphql';

export enum OrderVariationScalarFieldEnum {
    id = "id",
    name = "name",
    variant = "variant",
    orderProductId = "orderProductId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderVariationScalarFieldEnum, { name: 'OrderVariationScalarFieldEnum', description: undefined })
