import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutIncomesInput } from './order-create-without-incomes.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutIncomesInput } from './order-create-or-connect-without-incomes.input';
import { OrderUpsertWithoutIncomesInput } from './order-upsert-without-incomes.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutIncomesInput } from './order-update-to-one-with-where-without-incomes.input';

@InputType()
export class OrderUpdateOneRequiredWithoutIncomesNestedInput {

    @Field(() => OrderCreateWithoutIncomesInput, {nullable:true})
    @Type(() => OrderCreateWithoutIncomesInput)
    create?: OrderCreateWithoutIncomesInput;

    @Field(() => OrderCreateOrConnectWithoutIncomesInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutIncomesInput)
    connectOrCreate?: OrderCreateOrConnectWithoutIncomesInput;

    @Field(() => OrderUpsertWithoutIncomesInput, {nullable:true})
    @Type(() => OrderUpsertWithoutIncomesInput)
    upsert?: OrderUpsertWithoutIncomesInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutIncomesInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutIncomesInput)
    update?: OrderUpdateToOneWithWhereWithoutIncomesInput;
}
