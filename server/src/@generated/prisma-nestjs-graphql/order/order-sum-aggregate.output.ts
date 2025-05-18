import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderSumAggregate {

    @Field(() => Float, {nullable:true})
    couponDiscount?: number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => Float, {nullable:true})
    subtotal?: number;

    @Field(() => Float, {nullable:true})
    shippingFees?: number;

    @Field(() => Float, {nullable:true})
    shippingCount?: number;
}
