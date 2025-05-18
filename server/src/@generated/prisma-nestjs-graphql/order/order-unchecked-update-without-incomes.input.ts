import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderSellerUncheckedUpdateManyWithoutOrderNestedInput } from '../order-seller/order-seller-unchecked-update-many-without-order-nested.input';
import { PaymentInfoUncheckedUpdateOneWithoutOrderNestedInput } from '../payment-info/payment-info-unchecked-update-one-without-order-nested.input';
import { PointsUncheckedUpdateManyWithoutOrderNestedInput } from '../points/points-unchecked-update-many-without-order-nested.input';
import { RefundableUncheckedUpdateManyWithoutOrderNestedInput } from '../refundable/refundable-unchecked-update-many-without-order-nested.input';

@InputType()
export class OrderUncheckedUpdateWithoutIncomesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    couponDiscount?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    total?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    subtotal?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    shippingFees?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    shippingCount?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    estimateDelivery?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shippingAddressId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    billingAddressId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    paymentStatus?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderSellerUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    sellers?: OrderSellerUncheckedUpdateManyWithoutOrderNestedInput;

    @Field(() => PaymentInfoUncheckedUpdateOneWithoutOrderNestedInput, {nullable:true})
    payment?: PaymentInfoUncheckedUpdateOneWithoutOrderNestedInput;

    @Field(() => PointsUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    points?: PointsUncheckedUpdateManyWithoutOrderNestedInput;

    @Field(() => RefundableUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    refundables?: RefundableUncheckedUpdateManyWithoutOrderNestedInput;
}
