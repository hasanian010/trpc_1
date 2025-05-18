import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutBillingOrdersInput } from './address-update-without-billing-orders.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutBillingOrdersInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutBillingOrdersInput, {nullable:false})
    @Type(() => AddressUpdateWithoutBillingOrdersInput)
    data!: AddressUpdateWithoutBillingOrdersInput;
}
