import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutShippingOrdersInput } from './address-create-without-shipping-orders.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutShippingOrdersInput } from './address-create-or-connect-without-shipping-orders.input';
import { AddressUpsertWithoutShippingOrdersInput } from './address-upsert-without-shipping-orders.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutShippingOrdersInput } from './address-update-to-one-with-where-without-shipping-orders.input';

@InputType()
export class AddressUpdateOneWithoutShippingOrdersNestedInput {

    @Field(() => AddressCreateWithoutShippingOrdersInput, {nullable:true})
    @Type(() => AddressCreateWithoutShippingOrdersInput)
    create?: AddressCreateWithoutShippingOrdersInput;

    @Field(() => AddressCreateOrConnectWithoutShippingOrdersInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutShippingOrdersInput)
    connectOrCreate?: AddressCreateOrConnectWithoutShippingOrdersInput;

    @Field(() => AddressUpsertWithoutShippingOrdersInput, {nullable:true})
    @Type(() => AddressUpsertWithoutShippingOrdersInput)
    upsert?: AddressUpsertWithoutShippingOrdersInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    disconnect?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    delete?: AddressWhereInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutShippingOrdersInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutShippingOrdersInput)
    update?: AddressUpdateToOneWithWhereWithoutShippingOrdersInput;
}
