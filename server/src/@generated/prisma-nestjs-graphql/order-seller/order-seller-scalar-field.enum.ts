import { registerEnumType } from '@nestjs/graphql';

export enum OrderSellerScalarFieldEnum {
    id = "id",
    sellerId = "sellerId",
    orderId = "orderId",
    price = "price",
    status = "status",
    cancelBy = "cancelBy",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderSellerScalarFieldEnum, { name: 'OrderSellerScalarFieldEnum', description: undefined })
