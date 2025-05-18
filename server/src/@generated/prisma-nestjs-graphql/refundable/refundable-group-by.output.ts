import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RefundableCountAggregate } from './refundable-count-aggregate.output';
import { RefundableAvgAggregate } from './refundable-avg-aggregate.output';
import { RefundableSumAggregate } from './refundable-sum-aggregate.output';
import { RefundableMinAggregate } from './refundable-min-aggregate.output';
import { RefundableMaxAggregate } from './refundable-max-aggregate.output';

@ObjectType()
export class RefundableGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    orderProductId?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => Float, {nullable:true})
    couponDiscount?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RefundableCountAggregate, {nullable:true})
    _count?: RefundableCountAggregate;

    @Field(() => RefundableAvgAggregate, {nullable:true})
    _avg?: RefundableAvgAggregate;

    @Field(() => RefundableSumAggregate, {nullable:true})
    _sum?: RefundableSumAggregate;

    @Field(() => RefundableMinAggregate, {nullable:true})
    _min?: RefundableMinAggregate;

    @Field(() => RefundableMaxAggregate, {nullable:true})
    _max?: RefundableMaxAggregate;
}
