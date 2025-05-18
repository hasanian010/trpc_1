import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutRefundablesInput } from './order-create-without-refundables.input';

@InputType()
export class OrderCreateOrConnectWithoutRefundablesInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderCreateWithoutRefundablesInput)
    create!: OrderCreateWithoutRefundablesInput;
}
