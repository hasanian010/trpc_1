import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutMainCategoryInput } from '../product/product-create-nested-many-without-main-category.input';
import { SectionsCreateNestedManyWithoutCategoryInput } from '../sections/sections-create-nested-many-without-category.input';

@InputType()
export class MainCategoryCreateWithoutCategoriesInput {

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

    @Field(() => ProductCreateNestedManyWithoutMainCategoryInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutMainCategoryInput;

    @Field(() => SectionsCreateNestedManyWithoutCategoryInput, {nullable:true})
    sections?: SectionsCreateNestedManyWithoutCategoryInput;
}
