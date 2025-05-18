import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class OrderCreateManyShippingAddressInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:true})
    couponDiscount?: number;

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
