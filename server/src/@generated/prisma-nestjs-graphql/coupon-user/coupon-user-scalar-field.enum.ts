import { registerEnumType } from '@nestjs/graphql';

export enum CouponUserScalarFieldEnum {
    id = "id",
    code = "code",
    discount = "discount",
    discountUnit = "discountUnit",
    points = "points",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CouponUserScalarFieldEnum, { name: 'CouponUserScalarFieldEnum', description: undefined })
