import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BankUpdateOneWithoutSellerNestedInput } from '../bank/bank-update-one-without-seller-nested.input';
import { UserUpdateOneWithoutSellersNestedInput } from '../user/user-update-one-without-sellers-nested.input';
import { ProductUpdateManyWithoutSellerNestedInput } from '../product/product-update-many-without-seller-nested.input';
import { RefundableUpdateManyWithoutSellerNestedInput } from '../refundable/refundable-update-many-without-seller-nested.input';
import { WithdrawUpdateManyWithoutSellerNestedInput } from '../withdraw/withdraw-update-many-without-seller-nested.input';
import { IncomeUpdateManyWithoutSellerNestedInput } from '../income/income-update-many-without-seller-nested.input';
import { ReviewUpdateManyWithoutSellerNestedInput } from '../review/review-update-many-without-seller-nested.input';

@InputType()
export class SellerUpdateWithoutOrderSellersInput {

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

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalReview?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalRating?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BankUpdateOneWithoutSellerNestedInput, {nullable:true})
    bank?: BankUpdateOneWithoutSellerNestedInput;

    @Field(() => UserUpdateOneWithoutSellersNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutSellersNestedInput;

    @Field(() => ProductUpdateManyWithoutSellerNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutSellerNestedInput;

    @Field(() => RefundableUpdateManyWithoutSellerNestedInput, {nullable:true})
    refundables?: RefundableUpdateManyWithoutSellerNestedInput;

    @Field(() => WithdrawUpdateManyWithoutSellerNestedInput, {nullable:true})
    withdraws?: WithdrawUpdateManyWithoutSellerNestedInput;

    @Field(() => IncomeUpdateManyWithoutSellerNestedInput, {nullable:true})
    incomes?: IncomeUpdateManyWithoutSellerNestedInput;

    @Field(() => ReviewUpdateManyWithoutSellerNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutSellerNestedInput;
}
