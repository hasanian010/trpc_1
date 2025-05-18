import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AttributeUncheckedUpdateManyWithoutProductAttributesNestedInput } from '../attribute/attribute-unchecked-update-many-without-product-attributes-nested.input';
import { ProductAttributeValuesUncheckedUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-values/product-attribute-values-unchecked-update-many-without-product-attribute-nested.input';

@InputType()
export class ProductAttributeUncheckedUpdateWithoutSelectedVariantsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AttributeUncheckedUpdateManyWithoutProductAttributesNestedInput, {nullable:true})
    attributes?: AttributeUncheckedUpdateManyWithoutProductAttributesNestedInput;

    @Field(() => ProductAttributeValuesUncheckedUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUncheckedUpdateManyWithoutProductAttributeNestedInput;
}
