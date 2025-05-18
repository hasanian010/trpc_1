import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateNestedOneWithoutCategoriesInput } from '../main-category/main-category-create-nested-one-without-categories.input';
import { SubCategoryCreateNestedManyWithoutCategoryInput } from '../sub-category/sub-category-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MainCategoryCreateNestedOneWithoutCategoriesInput, {nullable:true})
    mainCategory?: MainCategoryCreateNestedOneWithoutCategoriesInput;

    @Field(() => SubCategoryCreateNestedManyWithoutCategoryInput, {nullable:true})
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput;
}
