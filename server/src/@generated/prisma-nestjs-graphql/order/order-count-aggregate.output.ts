import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    couponDiscount!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    subtotal!: number;

    @Field(() => Int, {nullable:false})
    shippingFees!: number;

    @Field(() => Int, {nullable:false})
    shippingCount!: number;

    @Field(() => Int, {nullable:false})
    estimateDelivery!: number;

    @Field(() => Int, {nullable:false})
    shippingAddressId!: number;

    @Field(() => Int, {nullable:false})
    billingAddressId!: number;

    @Field(() => Int, {nullable:false})
    note!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    paymentStatus!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
