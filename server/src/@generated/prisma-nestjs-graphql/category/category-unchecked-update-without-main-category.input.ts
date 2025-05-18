import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput } from '../sub-category/sub-category-unchecked-update-many-without-category-nested.input';
import { ProductUncheckedUpdateManyWithoutCategoryNestedInput } from '../product/product-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutMainCategoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput;
}
