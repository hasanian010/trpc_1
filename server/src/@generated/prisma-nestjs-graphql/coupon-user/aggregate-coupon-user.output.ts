import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CouponUserCountAggregate } from './coupon-user-count-aggregate.output';
import { CouponUserMinAggregate } from './coupon-user-min-aggregate.output';
import { CouponUserMaxAggregate } from './coupon-user-max-aggregate.output';

@ObjectType()
export class AggregateCouponUser {

    @Field(() => CouponUserCountAggregate, {nullable:true})
    _count?: CouponUserCountAggregate;

    @Field(() => CouponUserMinAggregate, {nullable:true})
    _min?: CouponUserMinAggregate;

    @Field(() => CouponUserMaxAggregate, {nullable:true})
    _max?: CouponUserMaxAggregate;
}
