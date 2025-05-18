import { registerEnumType } from '@nestjs/graphql';

export enum PointsScalarFieldEnum {
    id = "id",
    points = "points",
    orderId = "orderId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PointsScalarFieldEnum, { name: 'PointsScalarFieldEnum', description: undefined })
