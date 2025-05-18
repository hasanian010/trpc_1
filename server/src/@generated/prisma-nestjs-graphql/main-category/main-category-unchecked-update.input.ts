import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutMainCategoryNestedInput } from '../category/category-unchecked-update-many-without-main-category-nested.input';
import { ProductUncheckedUpdateManyWithoutMainCategoryNestedInput } from '../product/product-unchecked-update-many-without-main-category-nested.input';
import { SectionsUncheckedUpdateManyWithoutCategoryNestedInput } from '../sections/sections-unchecked-update-many-without-category-nested.input';

@InputType()
export class MainCategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutMainCategoryNestedInput, {nullable:true})
    categories?: CategoryUncheckedUpdateManyWithoutMainCategoryNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutMainCategoryNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutMainCategoryNestedInput;

    @Field(() => SectionsUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    sections?: SectionsUncheckedUpdateManyWithoutCategoryNestedInput;
}
