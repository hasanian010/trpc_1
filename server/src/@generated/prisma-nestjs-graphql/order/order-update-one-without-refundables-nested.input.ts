import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutRefundablesInput } from './order-create-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutRefundablesInput } from './order-create-or-connect-without-refundables.input';
import { OrderUpsertWithoutRefundablesInput } from './order-upsert-without-refundables.input';
import { OrderWhereInput } from './order-where.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutRefundablesInput } from './order-update-to-one-with-where-without-refundables.input';

@InputType()
export class OrderUpdateOneWithoutRefundablesNestedInput {

    @Field(() => OrderCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderCreateWithoutRefundablesInput)
    create?: OrderCreateWithoutRefundablesInput;

    @Field(() => OrderCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: OrderCreateOrConnectWithoutRefundablesInput;

    @Field(() => OrderUpsertWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderUpsertWithoutRefundablesInput)
    upsert?: OrderUpsertWithoutRefundablesInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    disconnect?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    delete?: OrderWhereInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutRefundablesInput)
    update?: OrderUpdateToOneWithWhereWithoutRefundablesInput;
}
