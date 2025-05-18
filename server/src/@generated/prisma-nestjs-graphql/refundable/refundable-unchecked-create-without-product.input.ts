import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderVariationUncheckedCreateNestedManyWithoutRefundablesInput } from '../order-variation/order-variation-unchecked-create-nested-many-without-refundables.input';
import { RefundUncheckedCreateNestedManyWithoutRefundableInput } from '../refund/refund-unchecked-create-nested-many-without-refundable.input';

@InputType()
export class RefundableUncheckedCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderVariationUncheckedCreateNestedManyWithoutRefundablesInput, {nullable:true})
    variations?: OrderVariationUncheckedCreateNestedManyWithoutRefundablesInput;

    @Field(() => RefundUncheckedCreateNestedManyWithoutRefundableInput, {nullable:true})
    refunds?: RefundUncheckedCreateNestedManyWithoutRefundableInput;
}
