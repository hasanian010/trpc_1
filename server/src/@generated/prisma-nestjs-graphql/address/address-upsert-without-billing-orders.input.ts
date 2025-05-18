import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutBillingOrdersInput } from './address-update-without-billing-orders.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutBillingOrdersInput } from './address-create-without-billing-orders.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutBillingOrdersInput {

    @Field(() => AddressUpdateWithoutBillingOrdersInput, {nullable:false})
    @Type(() => AddressUpdateWithoutBillingOrdersInput)
    update!: AddressUpdateWithoutBillingOrdersInput;

    @Field(() => AddressCreateWithoutBillingOrdersInput, {nullable:false})
    @Type(() => AddressCreateWithoutBillingOrdersInput)
    create!: AddressCreateWithoutBillingOrdersInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
