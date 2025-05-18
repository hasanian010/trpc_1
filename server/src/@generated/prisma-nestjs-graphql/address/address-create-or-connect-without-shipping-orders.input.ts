import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutShippingOrdersInput } from './address-create-without-shipping-orders.input';

@InputType()
export class AddressCreateOrConnectWithoutShippingOrdersInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutShippingOrdersInput, {nullable:false})
    @Type(() => AddressCreateWithoutShippingOrdersInput)
    create!: AddressCreateWithoutShippingOrdersInput;
}
