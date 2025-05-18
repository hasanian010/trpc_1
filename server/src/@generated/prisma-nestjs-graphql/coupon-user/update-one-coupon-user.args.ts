import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserUpdateInput } from './coupon-user-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CouponUserWhereUniqueInput } from './coupon-user-where-unique.input';

@ArgsType()
export class UpdateOneCouponUserArgs {

    @Field(() => CouponUserUpdateInput, {nullable:false})
    @Type(() => CouponUserUpdateInput)
    data!: CouponUserUpdateInput;

    @Field(() => CouponUserWhereUniqueInput, {nullable:false})
    @Type(() => CouponUserWhereUniqueInput)
    where!: Prisma.AtLeast<CouponUserWhereUniqueInput, 'id'>;
}
