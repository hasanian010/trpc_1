import { registerEnumType } from '@nestjs/graphql';

export enum OrderProductScalarFieldEnum {
    id = "id",
    productId = "productId",
    quantity = "quantity",
    tax = "tax",
    amount = "amount",
    orderSellerId = "orderSellerId",
    refundableIds = "refundableIds",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderProductScalarFieldEnum, { name: 'OrderProductScalarFieldEnum', description: undefined })
