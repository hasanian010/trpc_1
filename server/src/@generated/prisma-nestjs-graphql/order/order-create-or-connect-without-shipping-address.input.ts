import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutShippingAddressInput } from './order-create-without-shipping-address.input';

@InputType()
export class OrderCreateOrConnectWithoutShippingAddressInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutShippingAddressInput, {nullable:false})
    @Type(() => OrderCreateWithoutShippingAddressInput)
    create!: OrderCreateWithoutShippingAddressInput;
}
