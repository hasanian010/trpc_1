import { registerEnumType } from '@nestjs/graphql';

export enum PlatformScalarFieldEnum {
    id = "id",
    charge = "charge",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PlatformScalarFieldEnum, { name: 'PlatformScalarFieldEnum', description: undefined })
