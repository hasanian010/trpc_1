import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutIncomesInput } from './order-create-without-incomes.input';

@InputType()
export class OrderCreateOrConnectWithoutIncomesInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutIncomesInput, {nullable:false})
    @Type(() => OrderCreateWithoutIncomesInput)
    create!: OrderCreateWithoutIncomesInput;
}
