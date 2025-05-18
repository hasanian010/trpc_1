import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutShippingAddressInput } from './order-update-without-shipping-address.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutShippingAddressInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateWithoutShippingAddressInput, {nullable:false})
    @Type(() => OrderUpdateWithoutShippingAddressInput)
    data!: OrderUpdateWithoutShippingAddressInput;
}
