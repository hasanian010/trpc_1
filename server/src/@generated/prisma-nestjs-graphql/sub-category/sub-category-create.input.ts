import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutSubCategoriesInput } from '../category/category-create-nested-one-without-sub-categories.input';
import { ProductCreateNestedManyWithoutSubCategoriesInput } from '../product/product-create-nested-many-without-sub-categories.input';

@InputType()
export class SubCategoryCreateInput {

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

    @Field(() => CategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:true})
    category?: CategoryCreateNestedOneWithoutSubCategoriesInput;

    @Field(() => ProductCreateNestedManyWithoutSubCategoriesInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutSubCategoriesInput;
}
