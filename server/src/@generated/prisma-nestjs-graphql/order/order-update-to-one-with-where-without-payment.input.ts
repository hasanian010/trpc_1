import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutPaymentInput } from './order-update-without-payment.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutPaymentInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPaymentInput)
    data!: OrderUpdateWithoutPaymentInput;
}
