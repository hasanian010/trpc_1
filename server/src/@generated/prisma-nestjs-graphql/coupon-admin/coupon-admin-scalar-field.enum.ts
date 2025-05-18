import { registerEnumType } from '@nestjs/graphql';

export enum CouponAdminScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    discount = "discount",
    discountUnit = "discountUnit",
    minimumPurchase = "minimumPurchase",
    expires = "expires",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CouponAdminScalarFieldEnum, { name: 'CouponAdminScalarFieldEnum', description: undefined })
