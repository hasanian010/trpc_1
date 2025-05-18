import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderSumAggregateInput {

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
}
