import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutShippingOrdersInput } from './address-update-without-shipping-orders.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutShippingOrdersInput } from './address-create-without-shipping-orders.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutShippingOrdersInput {

    @Field(() => AddressUpdateWithoutShippingOrdersInput, {nullable:false})
    @Type(() => AddressUpdateWithoutShippingOrdersInput)
    update!: AddressUpdateWithoutShippingOrdersInput;

    @Field(() => AddressCreateWithoutShippingOrdersInput, {nullable:false})
    @Type(() => AddressCreateWithoutShippingOrdersInput)
    create!: AddressCreateWithoutShippingOrdersInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
