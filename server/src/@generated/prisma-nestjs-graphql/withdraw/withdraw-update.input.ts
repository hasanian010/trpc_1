import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SellerUpdateOneRequiredWithoutWithdrawsNestedInput } from '../seller/seller-update-one-required-without-withdraws-nested.input';
import { UserUpdateOneWithoutReleasedWithdrawsNestedInput } from '../user/user-update-one-without-released-withdraws-nested.input';

@InputType()
export class WithdrawUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    method?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SellerUpdateOneRequiredWithoutWithdrawsNestedInput, {nullable:true})
    seller?: SellerUpdateOneRequiredWithoutWithdrawsNestedInput;

    @Field(() => UserUpdateOneWithoutReleasedWithdrawsNestedInput, {nullable:true})
    releasedBy?: UserUpdateOneWithoutReleasedWithdrawsNestedInput;
}
