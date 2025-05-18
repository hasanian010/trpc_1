import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AttributeUpdateManyWithoutProductAttributesNestedInput } from '../attribute/attribute-update-many-without-product-attributes-nested.input';
import { ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-values/product-attribute-values-update-many-without-product-attribute-nested.input';
import { ProductUpdateOneRequiredWithoutProductAttributeNestedInput } from '../product/product-update-one-required-without-product-attribute-nested.input';

@InputType()
export class ProductAttributeUpdateWithoutSelectedVariantsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AttributeUpdateManyWithoutProductAttributesNestedInput, {nullable:true})
    attributes?: AttributeUpdateManyWithoutProductAttributesNestedInput;

    @Field(() => ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutProductAttributeNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutProductAttributeNestedInput;
}
