import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutIncomesInput } from './order-create-without-incomes.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutIncomesInput } from './order-create-or-connect-without-incomes.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutIncomesInput {

    @Field(() => OrderCreateWithoutIncomesInput, {nullable:true})
    @Type(() => OrderCreateWithoutIncomesInput)
    create?: OrderCreateWithoutIncomesInput;

    @Field(() => OrderCreateOrConnectWithoutIncomesInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutIncomesInput)
    connectOrCreate?: OrderCreateOrConnectWithoutIncomesInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;
}
