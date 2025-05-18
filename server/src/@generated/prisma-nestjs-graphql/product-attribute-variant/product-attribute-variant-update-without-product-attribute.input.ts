import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductAttributeVariantUpdateselectedInput } from './product-attribute-variant-updateselected.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutAttributeVariantsNestedInput } from '../product/product-update-one-required-without-attribute-variants-nested.input';

@InputType()
export class ProductAttributeVariantUpdateWithoutProductAttributeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ProductAttributeVariantUpdateselectedInput, {nullable:true})
    selected?: ProductAttributeVariantUpdateselectedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutAttributeVariantsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutAttributeVariantsNestedInput;
}
