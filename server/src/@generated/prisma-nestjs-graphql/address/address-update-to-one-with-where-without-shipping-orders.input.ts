import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutShippingOrdersInput } from './address-update-without-shipping-orders.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutShippingOrdersInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutShippingOrdersInput, {nullable:false})
    @Type(() => AddressUpdateWithoutShippingOrdersInput)
    data!: AddressUpdateWithoutShippingOrdersInput;
}
