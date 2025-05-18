import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutRefundablesInput } from './order-create-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutRefundablesInput } from './order-create-or-connect-without-refundables.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutRefundablesInput {

    @Field(() => OrderCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderCreateWithoutRefundablesInput)
    create?: OrderCreateWithoutRefundablesInput;

    @Field(() => OrderCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: OrderCreateOrConnectWithoutRefundablesInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;
}
