import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateNestedManyWithoutShippingAddressInput } from '../order/order-create-nested-many-without-shipping-address.input';
import { OrderCreateNestedManyWithoutBillingAddressInput } from '../order/order-create-nested-many-without-billing-address.input';

@InputType()
export class AddressCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    area!: string;

    @Field(() => String, {nullable:false})
    postal!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderCreateNestedManyWithoutShippingAddressInput, {nullable:true})
    shippingOrders?: OrderCreateNestedManyWithoutShippingAddressInput;

    @Field(() => OrderCreateNestedManyWithoutBillingAddressInput, {nullable:true})
    billingOrders?: OrderCreateNestedManyWithoutBillingAddressInput;
}
