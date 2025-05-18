import { registerEnumType } from '@nestjs/graphql';

export enum WishlistScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(WishlistScalarFieldEnum, { name: 'WishlistScalarFieldEnum', description: undefined })
