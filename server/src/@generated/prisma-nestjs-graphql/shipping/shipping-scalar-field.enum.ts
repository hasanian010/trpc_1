import { registerEnumType } from '@nestjs/graphql';

export enum ShippingScalarFieldEnum {
    id = "id",
    name = "name",
    rateInsideDhaka = "rateInsideDhaka",
    rateOutsideDhaka = "rateOutsideDhaka",
    rateInSavar = "rateInSavar",
    estimateDelivery = "estimateDelivery",
    active = "active",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ShippingScalarFieldEnum, { name: 'ShippingScalarFieldEnum', description: undefined })
