import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutPaymentInput } from './order-update-without-payment.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutPaymentInput {

    @Field(() => OrderUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPaymentInput)
    update!: OrderUpdateWithoutPaymentInput;

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:false})
    @Type(() => OrderCreateWithoutPaymentInput)
    create!: OrderCreateWithoutPaymentInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
