import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CouponUserCountAggregate } from './coupon-user-count-aggregate.output';
import { CouponUserMinAggregate } from './coupon-user-min-aggregate.output';
import { CouponUserMaxAggregate } from './coupon-user-max-aggregate.output';

@ObjectType()
export class CouponUserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => String, {nullable:false})
    points!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CouponUserCountAggregate, {nullable:true})
    _count?: CouponUserCountAggregate;

    @Field(() => CouponUserMinAggregate, {nullable:true})
    _min?: CouponUserMinAggregate;

    @Field(() => CouponUserMaxAggregate, {nullable:true})
    _max?: CouponUserMaxAggregate;
}
