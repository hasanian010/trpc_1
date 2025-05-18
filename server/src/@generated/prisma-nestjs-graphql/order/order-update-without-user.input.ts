import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderSellerUpdateManyWithoutOrderNestedInput } from '../order-seller/order-seller-update-many-without-order-nested.input';
import { PaymentInfoUpdateOneWithoutOrderNestedInput } from '../payment-info/payment-info-update-one-without-order-nested.input';
import { AddressUpdateOneWithoutShippingOrdersNestedInput } from '../address/address-update-one-without-shipping-orders-nested.input';
import { AddressUpdateOneWithoutBillingOrdersNestedInput } from '../address/address-update-one-without-billing-orders-nested.input';
import { PointsUpdateManyWithoutOrderNestedInput } from '../points/points-update-many-without-order-nested.input';
import { RefundableUpdateManyWithoutOrderNestedInput } from '../refundable/refundable-update-many-without-order-nested.input';
import { IncomeUpdateManyWithoutOrderNestedInput } from '../income/income-update-many-without-order-nested.input';

@InputType()
export class OrderUpdateWithoutUserInput {

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
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    paymentStatus?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderSellerUpdateManyWithoutOrderNestedInput, {nullable:true})
    sellers?: OrderSellerUpdateManyWithoutOrderNestedInput;

    @Field(() => PaymentInfoUpdateOneWithoutOrderNestedInput, {nullable:true})
    payment?: PaymentInfoUpdateOneWithoutOrderNestedInput;

    @Field(() => AddressUpdateOneWithoutShippingOrdersNestedInput, {nullable:true})
    shippingAddress?: AddressUpdateOneWithoutShippingOrdersNestedInput;

    @Field(() => AddressUpdateOneWithoutBillingOrdersNestedInput, {nullable:true})
    billingAddress?: AddressUpdateOneWithoutBillingOrdersNestedInput;

    @Field(() => PointsUpdateManyWithoutOrderNestedInput, {nullable:true})
    points?: PointsUpdateManyWithoutOrderNestedInput;

    @Field(() => RefundableUpdateManyWithoutOrderNestedInput, {nullable:true})
    refundables?: RefundableUpdateManyWithoutOrderNestedInput;

    @Field(() => IncomeUpdateManyWithoutOrderNestedInput, {nullable:true})
    incomes?: IncomeUpdateManyWithoutOrderNestedInput;
}
