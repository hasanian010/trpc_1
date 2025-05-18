import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutPaymentInput } from './order-create-or-connect-without-payment.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutPaymentInput {

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:true})
    @Type(() => OrderCreateWithoutPaymentInput)
    create?: OrderCreateWithoutPaymentInput;

    @Field(() => OrderCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;
}
