import { registerEnumType } from '@nestjs/graphql';

export enum PaymentInfoScalarFieldEnum {
    id = "id",
    paymentMethod = "paymentMethod",
    paymentId = "paymentId",
    provider = "provider",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PaymentInfoScalarFieldEnum, { name: 'PaymentInfoScalarFieldEnum', description: undefined })
