import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SectionsUpdateOneRequiredWithoutSectionProductsNestedInput } from '../sections/sections-update-one-required-without-section-products-nested.input';
import { ProductUpdateOneRequiredWithoutSectionProductsNestedInput } from '../product/product-update-one-required-without-section-products-nested.input';

@InputType()
export class SectionProductUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SectionsUpdateOneRequiredWithoutSectionProductsNestedInput, {nullable:true})
    section?: SectionsUpdateOneRequiredWithoutSectionProductsNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutSectionProductsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutSectionProductsNestedInput;
}
