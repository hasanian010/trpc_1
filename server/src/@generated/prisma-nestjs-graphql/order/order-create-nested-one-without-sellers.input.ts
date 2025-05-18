import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutSellersInput } from './order-create-without-sellers.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutSellersInput } from './order-create-or-connect-without-sellers.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutSellersInput {

    @Field(() => OrderCreateWithoutSellersInput, {nullable:true})
    @Type(() => OrderCreateWithoutSellersInput)
    create?: OrderCreateWithoutSellersInput;

    @Field(() => OrderCreateOrConnectWithoutSellersInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutSellersInput)
    connectOrCreate?: OrderCreateOrConnectWithoutSellersInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;
}
