import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminWhereInput } from './coupon-admin-where.input';
import { Type } from 'class-transformer';
import { CouponAdminOrderByWithAggregationInput } from './coupon-admin-order-by-with-aggregation.input';
import { CouponAdminScalarFieldEnum } from './coupon-admin-scalar-field.enum';
import { CouponAdminScalarWhereWithAggregatesInput } from './coupon-admin-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CouponAdminCountAggregateInput } from './coupon-admin-count-aggregate.input';
import { CouponAdminMinAggregateInput } from './coupon-admin-min-aggregate.input';
import { CouponAdminMaxAggregateInput } from './coupon-admin-max-aggregate.input';

@ArgsType()
export class CouponAdminGroupByArgs {

    @Field(() => CouponAdminWhereInput, {nullable:true})
    @Type(() => CouponAdminWhereInput)
    where?: CouponAdminWhereInput;

    @Field(() => [CouponAdminOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CouponAdminOrderByWithAggregationInput>;

    @Field(() => [CouponAdminScalarFieldEnum], {nullable:false})
    by!: Array<`${CouponAdminScalarFieldEnum}`>;

    @Field(() => CouponAdminScalarWhereWithAggregatesInput, {nullable:true})
    having?: CouponAdminScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CouponAdminCountAggregateInput, {nullable:true})
    _count?: CouponAdminCountAggregateInput;

    @Field(() => CouponAdminMinAggregateInput, {nullable:true})
    _min?: CouponAdminMinAggregateInput;

    @Field(() => CouponAdminMaxAggregateInput, {nullable:true})
    _max?: CouponAdminMaxAggregateInput;
}
