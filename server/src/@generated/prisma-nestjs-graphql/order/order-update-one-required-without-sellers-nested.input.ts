import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutSellersInput } from './order-create-without-sellers.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutSellersInput } from './order-create-or-connect-without-sellers.input';
import { OrderUpsertWithoutSellersInput } from './order-upsert-without-sellers.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutSellersInput } from './order-update-to-one-with-where-without-sellers.input';

@InputType()
export class OrderUpdateOneRequiredWithoutSellersNestedInput {

    @Field(() => OrderCreateWithoutSellersInput, {nullable:true})
    @Type(() => OrderCreateWithoutSellersInput)
    create?: OrderCreateWithoutSellersInput;

    @Field(() => OrderCreateOrConnectWithoutSellersInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutSellersInput)
    connectOrCreate?: OrderCreateOrConnectWithoutSellersInput;

    @Field(() => OrderUpsertWithoutSellersInput, {nullable:true})
    @Type(() => OrderUpsertWithoutSellersInput)
    upsert?: OrderUpsertWithoutSellersInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutSellersInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutSellersInput)
    update?: OrderUpdateToOneWithWhereWithoutSellersInput;
}
