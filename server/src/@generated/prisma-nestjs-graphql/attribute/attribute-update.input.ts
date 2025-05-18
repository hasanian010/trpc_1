import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ValuesUpdateManyWithoutAttributeNestedInput } from '../values/values-update-many-without-attribute-nested.input';
import { ProductAttributeUpdateManyWithoutAttributesNestedInput } from '../product-attribute/product-attribute-update-many-without-attributes-nested.input';

@InputType()
export class AttributeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ValuesUpdateManyWithoutAttributeNestedInput, {nullable:true})
    values?: ValuesUpdateManyWithoutAttributeNestedInput;

    @Field(() => ProductAttributeUpdateManyWithoutAttributesNestedInput, {nullable:true})
    productAttributes?: ProductAttributeUpdateManyWithoutAttributesNestedInput;
}
