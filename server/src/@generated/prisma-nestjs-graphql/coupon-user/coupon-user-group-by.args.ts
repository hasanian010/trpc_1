import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserWhereInput } from './coupon-user-where.input';
import { Type } from 'class-transformer';
import { CouponUserOrderByWithAggregationInput } from './coupon-user-order-by-with-aggregation.input';
import { CouponUserScalarFieldEnum } from './coupon-user-scalar-field.enum';
import { CouponUserScalarWhereWithAggregatesInput } from './coupon-user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CouponUserCountAggregateInput } from './coupon-user-count-aggregate.input';
import { CouponUserMinAggregateInput } from './coupon-user-min-aggregate.input';
import { CouponUserMaxAggregateInput } from './coupon-user-max-aggregate.input';

@ArgsType()
export class CouponUserGroupByArgs {

    @Field(() => CouponUserWhereInput, {nullable:true})
    @Type(() => CouponUserWhereInput)
    where?: CouponUserWhereInput;

    @Field(() => [CouponUserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CouponUserOrderByWithAggregationInput>;

    @Field(() => [CouponUserScalarFieldEnum], {nullable:false})
    by!: Array<`${CouponUserScalarFieldEnum}`>;

    @Field(() => CouponUserScalarWhereWithAggregatesInput, {nullable:true})
    having?: CouponUserScalarWhereWithAggregatesInput;

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
