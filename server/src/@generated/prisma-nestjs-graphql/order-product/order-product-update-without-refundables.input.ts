import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { OrderProductUpdaterefundableIdsInput } from './order-product-updaterefundable-ids.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutOrderProductsNestedInput } from '../product/product-update-one-required-without-order-products-nested.input';
import { OrderVariationUpdateManyWithoutOrderProductNestedInput } from '../order-variation/order-variation-update-many-without-order-product-nested.input';
import { OrderSellerUpdateOneWithoutProductsNestedInput } from '../order-seller/order-seller-update-one-without-products-nested.input';

@InputType()
export class OrderProductUpdateWithoutRefundablesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => ProductUpdateOneRequiredWithoutOrderProductsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutOrderProductsNestedInput;

    @Field(() => OrderVariationUpdateManyWithoutOrderProductNestedInput, {nullable:true})
    variations?: OrderVariationUpdateManyWithoutOrderProductNestedInput;

    @Field(() => OrderSellerUpdateOneWithoutProductsNestedInput, {nullable:true})
    orderSeller?: OrderSellerUpdateOneWithoutProductsNestedInput;
}
