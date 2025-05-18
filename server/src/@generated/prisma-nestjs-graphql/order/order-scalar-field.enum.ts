import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    orderId = "orderId",
    couponDiscount = "couponDiscount",
    total = "total",
    subtotal = "subtotal",
    shippingFees = "shippingFees",
    shippingCount = "shippingCount",
    estimateDelivery = "estimateDelivery",
    shippingAddressId = "shippingAddressId",
    billingAddressId = "billingAddressId",
    note = "note",
    userId = "userId",
    paymentStatus = "paymentStatus",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
