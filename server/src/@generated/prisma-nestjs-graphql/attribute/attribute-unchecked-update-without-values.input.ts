import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductAttributeUncheckedUpdateManyWithoutAttributesNestedInput } from '../product-attribute/product-attribute-unchecked-update-many-without-attributes-nested.input';

@InputType()
export class AttributeUncheckedUpdateWithoutValuesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductAttributeUncheckedUpdateManyWithoutAttributesNestedInput, {nullable:true})
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutAttributesNestedInput;
}
