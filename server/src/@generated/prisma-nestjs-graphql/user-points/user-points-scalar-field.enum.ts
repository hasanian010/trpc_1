import { registerEnumType } from '@nestjs/graphql';

export enum UserPointsScalarFieldEnum {
    id = "id",
    points = "points",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserPointsScalarFieldEnum, { name: 'UserPointsScalarFieldEnum', description: undefined })
