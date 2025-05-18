import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutMainCategoryInput } from '../product/product-unchecked-create-nested-many-without-main-category.input';
import { SectionsUncheckedCreateNestedManyWithoutCategoryInput } from '../sections/sections-unchecked-create-nested-many-without-category.input';

@InputType()
export class MainCategoryUncheckedCreateWithoutCategoriesInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutMainCategoryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutMainCategoryInput;

    @Field(() => SectionsUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    sections?: SectionsUncheckedCreateNestedManyWithoutCategoryInput;
}
