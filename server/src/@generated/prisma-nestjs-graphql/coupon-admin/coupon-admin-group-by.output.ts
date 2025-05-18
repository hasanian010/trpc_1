import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CouponAdminCountAggregate } from './coupon-admin-count-aggregate.output';
import { CouponAdminMinAggregate } from './coupon-admin-min-aggregate.output';
import { CouponAdminMaxAggregate } from './coupon-admin-max-aggregate.output';

@ObjectType()
export class CouponAdminGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => String, {nullable:false})
    minimumPurchase!: string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CouponAdminCountAggregate, {nullable:true})
    _count?: CouponAdminCountAggregate;

    @Field(() => CouponAdminMinAggregate, {nullable:true})
    _min?: CouponAdminMinAggregate;

    @Field(() => CouponAdminMaxAggregate, {nullable:true})
    _max?: CouponAdminMaxAggregate;
}
