import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RefundableUpdateOneRequiredWithoutRefundsNestedInput } from '../refundable/refundable-update-one-required-without-refunds-nested.input';
import { UserUpdateOneRequiredWithoutRefundsNestedInput } from '../user/user-update-one-required-without-refunds-nested.input';

@InputType()
export class RefundUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reason?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RefundableUpdateOneRequiredWithoutRefundsNestedInput, {nullable:true})
    refundable?: RefundableUpdateOneRequiredWithoutRefundsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRefundsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRefundsNestedInput;
}
