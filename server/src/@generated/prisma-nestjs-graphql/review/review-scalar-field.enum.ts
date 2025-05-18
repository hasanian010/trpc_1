import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    userId = "userId",
    sellerId = "sellerId",
    productId = "productId",
    image = "image",
    comment = "comment",
    reply = "reply",
    rating = "rating",
    publish = "publish",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
