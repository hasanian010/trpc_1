import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutBillingAddressInput } from './order-create-without-billing-address.input';

@InputType()
export class OrderCreateOrConnectWithoutBillingAddressInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutBillingAddressInput, {nullable:false})
    @Type(() => OrderCreateWithoutBillingAddressInput)
    create!: OrderCreateWithoutBillingAddressInput;
}
