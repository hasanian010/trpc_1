import { registerEnumType } from '@nestjs/graphql';

export enum RefundableScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    orderProductId = "orderProductId",
    orderId = "orderId",
    quantity = "quantity",
    sellerId = "sellerId",
    couponDiscount = "couponDiscount",
    amount = "amount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RefundableScalarFieldEnum, { name: 'RefundableScalarFieldEnum', description: undefined })
