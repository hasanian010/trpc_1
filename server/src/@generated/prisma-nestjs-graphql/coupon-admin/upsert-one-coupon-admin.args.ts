import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CouponAdminWhereUniqueInput } from './coupon-admin-where-unique.input';
import { Type } from 'class-transformer';
import { CouponAdminCreateInput } from './coupon-admin-create.input';
import { CouponAdminUpdateInput } from './coupon-admin-update.input';

@ArgsType()
export class UpsertOneCouponAdminArgs {

    @Field(() => CouponAdminWhereUniqueInput, {nullable:false})
    @Type(() => CouponAdminWhereUniqueInput)
    where!: Prisma.AtLeast<CouponAdminWhereUniqueInput, 'id'>;

    @Field(() => CouponAdminCreateInput, {nullable:false})
    @Type(() => CouponAdminCreateInput)
    create!: CouponAdminCreateInput;

    @Field(() => CouponAdminUpdateInput, {nullable:false})
    @Type(() => CouponAdminUpdateInput)
    update!: CouponAdminUpdateInput;
}
