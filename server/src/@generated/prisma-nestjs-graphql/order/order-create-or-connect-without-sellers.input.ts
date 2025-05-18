import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutSellersInput } from './order-create-without-sellers.input';

@InputType()
export class OrderCreateOrConnectWithoutSellersInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutSellersInput, {nullable:false})
    @Type(() => OrderCreateWithoutSellersInput)
    create!: OrderCreateWithoutSellersInput;
}
