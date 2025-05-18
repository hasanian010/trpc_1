import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderProductUpdateOneRequiredWithoutVariationsNestedInput } from '../order-product/order-product-update-one-required-without-variations-nested.input';
import { RefundableUpdateManyWithoutVariationsNestedInput } from '../refundable/refundable-update-many-without-variations-nested.input';

@InputType()
export class OrderVariationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    variant?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderProductUpdateOneRequiredWithoutVariationsNestedInput, {nullable:true})
    orderProduct?: OrderProductUpdateOneRequiredWithoutVariationsNestedInput;

    @Field(() => RefundableUpdateManyWithoutVariationsNestedInput, {nullable:true})
    refundables?: RefundableUpdateManyWithoutVariationsNestedInput;
}
