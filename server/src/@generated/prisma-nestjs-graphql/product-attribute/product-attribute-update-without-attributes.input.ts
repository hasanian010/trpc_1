import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductAttributeVariantUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-variant/product-attribute-variant-update-many-without-product-attribute-nested.input';
import { ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-values/product-attribute-values-update-many-without-product-attribute-nested.input';
import { ProductUpdateOneRequiredWithoutProductAttributeNestedInput } from '../product/product-update-one-required-without-product-attribute-nested.input';

@InputType()
export class ProductAttributeUpdateWithoutAttributesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductAttributeVariantUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantUpdateManyWithoutProductAttributeNestedInput;

    @Field(() => ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutProductAttributeNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutProductAttributeNestedInput;
}
