import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserWhereInput } from './coupon-user-where.input';
import { Type } from 'class-transformer';
import { CouponUserOrderByWithRelationInput } from './coupon-user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CouponUserWhereUniqueInput } from './coupon-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CouponUserCountAggregateInput } from './coupon-user-count-aggregate.input';
import { CouponUserMinAggregateInput } from './coupon-user-min-aggregate.input';
import { CouponUserMaxAggregateInput } from './coupon-user-max-aggregate.input';

@ArgsType()
export class CouponUserAggregateArgs {

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

    @Field(() => CouponUserCountAggregateInput, {nullable:true})
    _count?: CouponUserCountAggregateInput;

    @Field(() => CouponUserMinAggregateInput, {nullable:true})
    _min?: CouponUserMinAggregateInput;

    @Field(() => CouponUserMaxAggregateInput, {nullable:true})
    _max?: CouponUserMaxAggregateInput;
}
