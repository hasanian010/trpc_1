import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CouponUserWhereUniqueInput } from './coupon-user-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCouponUserArgs {

    @Field(() => CouponUserWhereUniqueInput, {nullable:false})
    @Type(() => CouponUserWhereUniqueInput)
    where!: Prisma.AtLeast<CouponUserWhereUniqueInput, 'id'>;
}
