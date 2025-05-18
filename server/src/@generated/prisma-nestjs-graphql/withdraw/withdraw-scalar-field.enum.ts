import { registerEnumType } from '@nestjs/graphql';

export enum WithdrawScalarFieldEnum {
    id = "id",
    sellerId = "sellerId",
    amount = "amount",
    releasedById = "releasedById",
    method = "method",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(WithdrawScalarFieldEnum, { name: 'WithdrawScalarFieldEnum', description: undefined })
