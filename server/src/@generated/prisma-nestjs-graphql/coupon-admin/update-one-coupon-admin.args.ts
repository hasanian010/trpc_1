import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminUpdateInput } from './coupon-admin-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CouponAdminWhereUniqueInput } from './coupon-admin-where-unique.input';

@ArgsType()
export class UpdateOneCouponAdminArgs {

    @Field(() => CouponAdminUpdateInput, {nullable:false})
    @Type(() => CouponAdminUpdateInput)
    data!: CouponAdminUpdateInput;

    @Field(() => CouponAdminWhereUniqueInput, {nullable:false})
    @Type(() => CouponAdminWhereUniqueInput)
    where!: Prisma.AtLeast<CouponAdminWhereUniqueInput, 'id'>;
}
