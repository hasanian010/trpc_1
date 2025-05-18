import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateOneWithoutSubCategoriesNestedInput } from '../category/category-update-one-without-sub-categories-nested.input';
import { ProductUpdateManyWithoutSubCategoriesNestedInput } from '../product/product-update-many-without-sub-categories-nested.input';

@InputType()
export class SubCategoryUpdateInput {

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

    @Field(() => CategoryUpdateOneWithoutSubCategoriesNestedInput, {nullable:true})
    category?: CategoryUpdateOneWithoutSubCategoriesNestedInput;

    @Field(() => ProductUpdateManyWithoutSubCategoriesNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutSubCategoriesNestedInput;
}
