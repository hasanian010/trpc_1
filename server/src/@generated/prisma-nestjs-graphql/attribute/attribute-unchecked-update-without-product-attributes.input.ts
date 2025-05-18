import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ValuesUncheckedUpdateManyWithoutAttributeNestedInput } from '../values/values-unchecked-update-many-without-attribute-nested.input';

@InputType()
export class AttributeUncheckedUpdateWithoutProductAttributesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ValuesUncheckedUpdateManyWithoutAttributeNestedInput, {nullable:true})
    values?: ValuesUncheckedUpdateManyWithoutAttributeNestedInput;
}
