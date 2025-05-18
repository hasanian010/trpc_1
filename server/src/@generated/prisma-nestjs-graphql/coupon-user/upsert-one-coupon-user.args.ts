import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CouponUserWhereUniqueInput } from './coupon-user-where-unique.input';
import { Type } from 'class-transformer';
import { CouponUserCreateInput } from './coupon-user-create.input';
import { CouponUserUpdateInput } from './coupon-user-update.input';

@ArgsType()
export class UpsertOneCouponUserArgs {

    @Field(() => CouponUserWhereUniqueInput, {nullable:false})
    @Type(() => CouponUserWhereUniqueInput)
    where!: Prisma.AtLeast<CouponUserWhereUniqueInput, 'id'>;

    @Field(() => CouponUserCreateInput, {nullable:false})
    @Type(() => CouponUserCreateInput)
    create!: CouponUserCreateInput;

    @Field(() => CouponUserUpdateInput, {nullable:false})
    @Type(() => CouponUserUpdateInput)
    update!: CouponUserUpdateInput;
}
