import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';

@InputType()
export class OrderCreateOrConnectWithoutPaymentInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:false})
    @Type(() => OrderCreateWithoutPaymentInput)
    create!: OrderCreateWithoutPaymentInput;
}
