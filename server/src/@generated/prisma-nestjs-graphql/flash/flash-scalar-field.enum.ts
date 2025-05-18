import { registerEnumType } from '@nestjs/graphql';

export enum FlashScalarFieldEnum {
    id = "id",
    title = "title",
    image = "image",
    thumb = "thumb",
    start = "start",
    expires = "expires",
    discount = "discount",
    discountUnit = "discountUnit",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FlashScalarFieldEnum, { name: 'FlashScalarFieldEnum', description: undefined })
