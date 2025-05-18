import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutShippingOrdersInput } from './address-create-without-shipping-orders.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutShippingOrdersInput } from './address-create-or-connect-without-shipping-orders.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutShippingOrdersInput {

    @Field(() => AddressCreateWithoutShippingOrdersInput, {nullable:true})
    @Type(() => AddressCreateWithoutShippingOrdersInput)
    create?: AddressCreateWithoutShippingOrdersInput;

    @Field(() => AddressCreateOrConnectWithoutShippingOrdersInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutShippingOrdersInput)
    connectOrCreate?: AddressCreateOrConnectWithoutShippingOrdersInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
