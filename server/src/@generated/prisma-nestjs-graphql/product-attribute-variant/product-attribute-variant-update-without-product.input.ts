import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductAttributeVariantUpdateselectedInput } from './product-attribute-variant-updateselected.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductAttributeUpdateOneWithoutSelectedVariantsNestedInput } from '../product-attribute/product-attribute-update-one-without-selected-variants-nested.input';

@InputType()
export class ProductAttributeVariantUpdateWithoutProductInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ProductAttributeVariantUpdateselectedInput, {nullable:true})
    selected?: ProductAttributeVariantUpdateselectedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductAttributeUpdateOneWithoutSelectedVariantsNestedInput, {nullable:true})
    productAttribute?: ProductAttributeUpdateOneWithoutSelectedVariantsNestedInput;
}
