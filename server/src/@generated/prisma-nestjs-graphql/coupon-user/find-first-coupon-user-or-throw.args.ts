import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserWhereInput } from './coupon-user-where.input';
import { Type } from 'class-transformer';
import { CouponUserOrderByWithRelationInput } from './coupon-user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CouponUserWhereUniqueInput } from './coupon-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CouponUserScalarFieldEnum } from './coupon-user-scalar-field.enum';

@ArgsType()
export class FindFirstCouponUserOrThrowArgs {

    @Field(() => CouponUserWhereInput, {nullable:true})
    @Type(() => CouponUserWhereInput)
    where?: CouponUserWhereInput;

    @Field(() => [CouponUserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CouponUserOrderByWithRelationInput>;

    @Field(() => CouponUserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CouponUserWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CouponUserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CouponUserScalarFieldEnum}`>;
}
