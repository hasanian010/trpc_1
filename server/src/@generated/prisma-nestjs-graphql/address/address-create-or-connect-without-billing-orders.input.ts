import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutBillingOrdersInput } from './address-create-without-billing-orders.input';

@InputType()
export class AddressCreateOrConnectWithoutBillingOrdersInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutBillingOrdersInput, {nullable:false})
    @Type(() => AddressCreateWithoutBillingOrdersInput)
    create!: AddressCreateWithoutBillingOrdersInput;
}
