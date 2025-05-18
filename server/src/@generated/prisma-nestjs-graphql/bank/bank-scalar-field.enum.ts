import { registerEnumType } from '@nestjs/graphql';

export enum BankScalarFieldEnum {
    id = "id",
    name = "name",
    accNumber = "accNumber",
    routing = "routing",
    bankName = "bankName",
    branch = "branch",
    sellerId = "sellerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BankScalarFieldEnum, { name: 'BankScalarFieldEnum', description: undefined })
