import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateManyWithoutMainCategoryNestedInput } from '../category/category-update-many-without-main-category-nested.input';
import { ProductUpdateManyWithoutMainCategoryNestedInput } from '../product/product-update-many-without-main-category-nested.input';

@InputType()
export class MainCategoryUpdateWithoutSectionsInput {

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

    @Field(() => CategoryUpdateManyWithoutMainCategoryNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutMainCategoryNestedInput;

    @Field(() => ProductUpdateManyWithoutMainCategoryNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutMainCategoryNestedInput;
}
