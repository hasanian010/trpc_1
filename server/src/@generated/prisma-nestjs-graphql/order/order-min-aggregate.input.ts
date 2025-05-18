import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    couponDiscount?: true;

    @Field(() => Boolean, {nullable:true})
    total?: true;

    @Field(() => Boolean, {nullable:true})
    subtotal?: true;

    @Field(() => Boolean, {nullable:true})
    shippingFees?: true;

    @Field(() => Boolean, {nullable:true})
    shippingCount?: true;

    @Field(() => Boolean, {nullable:true})
    estimateDelivery?: true;

    @Field(() => Boolean, {nullable:true})
    shippingAddressId?: true;

    @Field(() => Boolean, {nullable:true})
    billingAddressId?: true;

    @Field(() => Boolean, {nullable:true})
    note?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    paymentStatus?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
