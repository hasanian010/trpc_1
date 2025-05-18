import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-variant/product-attribute-variant-unchecked-update-many-without-product-attribute-nested.input';
import { ProductAttributeValuesUncheckedUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-values/product-attribute-values-unchecked-update-many-without-product-attribute-nested.input';

@InputType()
export class ProductAttributeUncheckedUpdateWithoutAttributesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput;

    @Field(() => ProductAttributeValuesUncheckedUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUncheckedUpdateManyWithoutProductAttributeNestedInput;
}
