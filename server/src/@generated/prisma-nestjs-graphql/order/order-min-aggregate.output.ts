import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

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

    @Field(() => String, {nullable:true})
    estimateDelivery?: string;

    @Field(() => String, {nullable:true})
    shippingAddressId?: string;

    @Field(() => String, {nullable:true})
    billingAddressId?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Boolean, {nullable:true})
    paymentStatus?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
