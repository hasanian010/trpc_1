import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutBillingOrdersInput } from './address-create-without-billing-orders.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutBillingOrdersInput } from './address-create-or-connect-without-billing-orders.input';
import { AddressUpsertWithoutBillingOrdersInput } from './address-upsert-without-billing-orders.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutBillingOrdersInput } from './address-update-to-one-with-where-without-billing-orders.input';

@InputType()
export class AddressUpdateOneWithoutBillingOrdersNestedInput {

    @Field(() => AddressCreateWithoutBillingOrdersInput, {nullable:true})
    @Type(() => AddressCreateWithoutBillingOrdersInput)
    create?: AddressCreateWithoutBillingOrdersInput;

    @Field(() => AddressCreateOrConnectWithoutBillingOrdersInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutBillingOrdersInput)
    connectOrCreate?: AddressCreateOrConnectWithoutBillingOrdersInput;

    @Field(() => AddressUpsertWithoutBillingOrdersInput, {nullable:true})
    @Type(() => AddressUpsertWithoutBillingOrdersInput)
    upsert?: AddressUpsertWithoutBillingOrdersInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    disconnect?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    delete?: AddressWhereInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutBillingOrdersInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutBillingOrdersInput)
    update?: AddressUpdateToOneWithWhereWithoutBillingOrdersInput;
}
