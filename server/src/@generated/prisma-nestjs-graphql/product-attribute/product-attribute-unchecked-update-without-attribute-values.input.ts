import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AttributeUncheckedUpdateManyWithoutProductAttributesNestedInput } from '../attribute/attribute-unchecked-update-many-without-product-attributes-nested.input';
import { ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput } from '../product-attribute-variant/product-attribute-variant-unchecked-update-many-without-product-attribute-nested.input';

@InputType()
export class ProductAttributeUncheckedUpdateWithoutAttributeValuesInput {

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

    @Field(() => ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput;
}
