import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:false})
    couponDiscount!: number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => Float, {nullable:false})
    subtotal!: number;

    @Field(() => Float, {nullable:false})
    shippingFees!: number;

    @Field(() => Float, {nullable:false})
    shippingCount!: number;

    @Field(() => String, {nullable:false})
    estimateDelivery!: string;

    @Field(() => String, {nullable:true})
    shippingAddressId?: string;

    @Field(() => String, {nullable:true})
    billingAddressId?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Boolean, {nullable:false})
    paymentStatus!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: OrderAvgAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: OrderSumAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
