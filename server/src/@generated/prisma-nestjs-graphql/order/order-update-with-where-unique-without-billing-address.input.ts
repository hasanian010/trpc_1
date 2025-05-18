import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutBillingAddressInput } from './order-update-without-billing-address.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutBillingAddressInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateWithoutBillingAddressInput, {nullable:false})
    @Type(() => OrderUpdateWithoutBillingAddressInput)
    data!: OrderUpdateWithoutBillingAddressInput;
}
