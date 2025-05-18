import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminWhereInput } from './coupon-admin-where.input';
import { Type } from 'class-transformer';
import { CouponAdminOrderByWithRelationInput } from './coupon-admin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CouponAdminWhereUniqueInput } from './coupon-admin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CouponAdminCountAggregateInput } from './coupon-admin-count-aggregate.input';
import { CouponAdminMinAggregateInput } from './coupon-admin-min-aggregate.input';
import { CouponAdminMaxAggregateInput } from './coupon-admin-max-aggregate.input';

@ArgsType()
export class CouponAdminAggregateArgs {

    @Field(() => CouponAdminWhereInput, {nullable:true})
    @Type(() => CouponAdminWhereInput)
    where?: CouponAdminWhereInput;

    @Field(() => [CouponAdminOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CouponAdminOrderByWithRelationInput>;

    @Field(() => CouponAdminWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CouponAdminWhereUniqueInput, 'id'>;

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
