import { registerEnumType } from '@nestjs/graphql';

export enum RefundScalarFieldEnum {
    id = "id",
    refundableId = "refundableId",
    userId = "userId",
    quantity = "quantity",
    reason = "reason",
    description = "description",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RefundScalarFieldEnum, { name: 'RefundScalarFieldEnum', description: undefined })
