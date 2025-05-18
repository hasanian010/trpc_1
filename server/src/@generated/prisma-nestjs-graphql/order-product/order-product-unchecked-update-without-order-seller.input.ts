import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { OrderProductUpdaterefundableIdsInput } from './order-product-updaterefundable-ids.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderVariationUncheckedUpdateManyWithoutOrderProductNestedInput } from '../order-variation/order-variation-unchecked-update-many-without-order-product-nested.input';
import { RefundableUncheckedUpdateManyWithoutOrderProductNestedInput } from '../refundable/refundable-unchecked-update-many-without-order-product-nested.input';

@InputType()
export class OrderProductUncheckedUpdateWithoutOrderSellerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    tax?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => OrderProductUpdaterefundableIdsInput, {nullable:true})
    refundableIds?: OrderProductUpdaterefundableIdsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderVariationUncheckedUpdateManyWithoutOrderProductNestedInput, {nullable:true})
    variations?: OrderVariationUncheckedUpdateManyWithoutOrderProductNestedInput;

    @Field(() => RefundableUncheckedUpdateManyWithoutOrderProductNestedInput, {nullable:true})
    refundables?: RefundableUncheckedUpdateManyWithoutOrderProductNestedInput;
}
