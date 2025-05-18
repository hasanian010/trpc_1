import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SellerUpdateOneRequiredWithoutOrderSellersNestedInput } from '../seller/seller-update-one-required-without-order-sellers-nested.input';
import { OrderProductUpdateManyWithoutOrderSellerNestedInput } from '../order-product/order-product-update-many-without-order-seller-nested.input';
import { OrderUpdateOneRequiredWithoutSellersNestedInput } from '../order/order-update-one-required-without-sellers-nested.input';

@InputType()
export class OrderSellerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cancelBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SellerUpdateOneRequiredWithoutOrderSellersNestedInput, {nullable:true})
    seller?: SellerUpdateOneRequiredWithoutOrderSellersNestedInput;

    @Field(() => OrderProductUpdateManyWithoutOrderSellerNestedInput, {nullable:true})
    products?: OrderProductUpdateManyWithoutOrderSellerNestedInput;

    @Field(() => OrderUpdateOneRequiredWithoutSellersNestedInput, {nullable:true})
    order?: OrderUpdateOneRequiredWithoutSellersNestedInput;
}
