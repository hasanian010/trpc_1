import { registerEnumType } from '@nestjs/graphql';

export enum ProviderScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProviderScalarFieldEnum, { name: 'ProviderScalarFieldEnum', description: undefined })
