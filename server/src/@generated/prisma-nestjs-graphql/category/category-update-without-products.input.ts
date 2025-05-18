import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MainCategoryUpdateOneWithoutCategoriesNestedInput } from '../main-category/main-category-update-one-without-categories-nested.input';
import { SubCategoryUpdateManyWithoutCategoryNestedInput } from '../sub-category/sub-category-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateWithoutProductsInput {

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

    @Field(() => MainCategoryUpdateOneWithoutCategoriesNestedInput, {nullable:true})
    mainCategory?: MainCategoryUpdateOneWithoutCategoriesNestedInput;

    @Field(() => SubCategoryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput;
}
