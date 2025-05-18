import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutAddressesNestedInput } from '../user/user-update-one-without-addresses-nested.input';
import { OrderUpdateManyWithoutShippingAddressNestedInput } from '../order/order-update-many-without-shipping-address-nested.input';
import { OrderUpdateManyWithoutBillingAddressNestedInput } from '../order/order-update-many-without-billing-address-nested.input';

@InputType()
export class AddressUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    area?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    postal?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutAddressesNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutAddressesNestedInput;

    @Field(() => OrderUpdateManyWithoutShippingAddressNestedInput, {nullable:true})
    shippingOrders?: OrderUpdateManyWithoutShippingAddressNestedInput;

    @Field(() => OrderUpdateManyWithoutBillingAddressNestedInput, {nullable:true})
    billingOrders?: OrderUpdateManyWithoutBillingAddressNestedInput;
}
