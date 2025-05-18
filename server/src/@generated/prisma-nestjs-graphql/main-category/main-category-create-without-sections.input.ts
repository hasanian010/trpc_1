import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutMainCategoryInput } from '../category/category-create-nested-many-without-main-category.input';
import { ProductCreateNestedManyWithoutMainCategoryInput } from '../product/product-create-nested-many-without-main-category.input';

@InputType()
export class MainCategoryCreateWithoutSectionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryCreateNestedManyWithoutMainCategoryInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutMainCategoryInput;

    @Field(() => ProductCreateNestedManyWithoutMainCategoryInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutMainCategoryInput;
}
