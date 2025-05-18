import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutRefundablesNestedInput } from '../user/user-update-one-without-refundables-nested.input';
import { ProductUpdateOneWithoutRefundablesNestedInput } from '../product/product-update-one-without-refundables-nested.input';
import { OrderProductUpdateOneWithoutRefundablesNestedInput } from '../order-product/order-product-update-one-without-refundables-nested.input';
import { OrderUpdateOneWithoutRefundablesNestedInput } from '../order/order-update-one-without-refundables-nested.input';
import { OrderVariationUpdateManyWithoutRefundablesNestedInput } from '../order-variation/order-variation-update-many-without-refundables-nested.input';
import { SellerUpdateOneWithoutRefundablesNestedInput } from '../seller/seller-update-one-without-refundables-nested.input';

@InputType()
export class RefundableUpdateWithoutRefundsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    couponDiscount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    amount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutRefundablesNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutRefundablesNestedInput;

    @Field(() => ProductUpdateOneWithoutRefundablesNestedInput, {nullable:true})
    product?: ProductUpdateOneWithoutRefundablesNestedInput;

    @Field(() => OrderProductUpdateOneWithoutRefundablesNestedInput, {nullable:true})
    orderProduct?: OrderProductUpdateOneWithoutRefundablesNestedInput;

    @Field(() => OrderUpdateOneWithoutRefundablesNestedInput, {nullable:true})
    order?: OrderUpdateOneWithoutRefundablesNestedInput;

    @Field(() => OrderVariationUpdateManyWithoutRefundablesNestedInput, {nullable:true})
    variations?: OrderVariationUpdateManyWithoutRefundablesNestedInput;

    @Field(() => SellerUpdateOneWithoutRefundablesNestedInput, {nullable:true})
    seller?: SellerUpdateOneWithoutRefundablesNestedInput;
}
