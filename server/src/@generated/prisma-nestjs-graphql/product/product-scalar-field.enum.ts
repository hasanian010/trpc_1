import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    sellerId = "sellerId",
    mainCategoryId = "mainCategoryId",
    categoryId = "categoryId",
    brandId = "brandId",
    unit = "unit",
    minPurchase = "minPurchase",
    refundAble = "refundAble",
    images = "images",
    youtubeLink = "youtubeLink",
    flashId = "flashId",
    price = "price",
    quantity = "quantity",
    discount = "discount",
    discountUnit = "discountUnit",
    description = "description",
    visibility = "visibility",
    isApproved = "isApproved",
    estimateDelivery = "estimateDelivery",
    warranty = "warranty",
    showStock = "showStock",
    tax = "tax",
    taxUnit = "taxUnit",
    totalPrice = "totalPrice",
    disclaimer = "disclaimer",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
