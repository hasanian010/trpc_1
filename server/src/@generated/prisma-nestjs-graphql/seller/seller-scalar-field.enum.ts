import { registerEnumType } from '@nestjs/graphql';

export enum SellerScalarFieldEnum {
    id = "id",
    shopName = "shopName",
    phone = "phone",
    logo = "logo",
    banner = "banner",
    address = "address",
    metaTitle = "metaTitle",
    metaDescription = "metaDescription",
    isVerified = "isVerified",
    isBanned = "isBanned",
    userId = "userId",
    totalReview = "totalReview",
    totalRating = "totalRating",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SellerScalarFieldEnum, { name: 'SellerScalarFieldEnum', description: undefined })
