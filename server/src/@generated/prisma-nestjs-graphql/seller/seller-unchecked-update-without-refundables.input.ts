import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BankUncheckedUpdateOneWithoutSellerNestedInput } from '../bank/bank-unchecked-update-one-without-seller-nested.input';
import { ProductUncheckedUpdateManyWithoutSellerNestedInput } from '../product/product-unchecked-update-many-without-seller-nested.input';
import { OrderSellerUncheckedUpdateManyWithoutSellerNestedInput } from '../order-seller/order-seller-unchecked-update-many-without-seller-nested.input';
import { WithdrawUncheckedUpdateManyWithoutSellerNestedInput } from '../withdraw/withdraw-unchecked-update-many-without-seller-nested.input';
import { IncomeUncheckedUpdateManyWithoutSellerNestedInput } from '../income/income-unchecked-update-many-without-seller-nested.input';
import { ReviewUncheckedUpdateManyWithoutSellerNestedInput } from '../review/review-unchecked-update-many-without-seller-nested.input';

@InputType()
export class SellerUncheckedUpdateWithoutRefundablesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    shopName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    logo?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    banner?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    metaTitle?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    metaDescription?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isBanned?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalReview?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalRating?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BankUncheckedUpdateOneWithoutSellerNestedInput, {nullable:true})
    bank?: BankUncheckedUpdateOneWithoutSellerNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => OrderSellerUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    orderSellers?: OrderSellerUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => WithdrawUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    withdraws?: WithdrawUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => IncomeUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    incomes?: IncomeUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutSellerNestedInput;
}
