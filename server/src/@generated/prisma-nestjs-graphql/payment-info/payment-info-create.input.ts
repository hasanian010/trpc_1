import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateNestedOneWithoutPaymentInput } from '../order/order-create-nested-one-without-payment.input';

@InputType()
export class PaymentInfoCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    paymentMethod?: string;

    @Field(() => String, {nullable:true})
    paymentId?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderCreateNestedOneWithoutPaymentInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutPaymentInput;
}
