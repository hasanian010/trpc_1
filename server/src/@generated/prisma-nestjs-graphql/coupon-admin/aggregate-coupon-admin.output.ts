import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CouponAdminCountAggregate } from './coupon-admin-count-aggregate.output';
import { CouponAdminMinAggregate } from './coupon-admin-min-aggregate.output';
import { CouponAdminMaxAggregate } from './coupon-admin-max-aggregate.output';

@ObjectType()
export class AggregateCouponAdmin {

    @Field(() => CouponAdminCountAggregate, {nullable:true})
    _count?: CouponAdminCountAggregate;

    @Field(() => CouponAdminMinAggregate, {nullable:true})
    _min?: CouponAdminMinAggregate;

    @Field(() => CouponAdminMaxAggregate, {nullable:true})
    _max?: CouponAdminMaxAggregate;
}
