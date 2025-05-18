import { registerEnumType } from '@nestjs/graphql';

export enum IncomeScalarFieldEnum {
    id = "id",
    sellerId = "sellerId",
    orderId = "orderId",
    income = "income",
    paySuccess = "paySuccess",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(IncomeScalarFieldEnum, { name: 'IncomeScalarFieldEnum', description: undefined })
