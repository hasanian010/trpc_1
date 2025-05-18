import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutBillingOrdersInput } from './address-create-without-billing-orders.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutBillingOrdersInput } from './address-create-or-connect-without-billing-orders.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutBillingOrdersInput {

    @Field(() => AddressCreateWithoutBillingOrdersInput, {nullable:true})
    @Type(() => AddressCreateWithoutBillingOrdersInput)
    create?: AddressCreateWithoutBillingOrdersInput;

    @Field(() => AddressCreateOrConnectWithoutBillingOrdersInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutBillingOrdersInput)
    connectOrCreate?: AddressCreateOrConnectWithoutBillingOrdersInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
