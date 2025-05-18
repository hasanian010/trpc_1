import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutMainCategoryInput } from '../category/category-unchecked-create-nested-many-without-main-category.input';
import { ProductUncheckedCreateNestedManyWithoutMainCategoryInput } from '../product/product-unchecked-create-nested-many-without-main-category.input';

@InputType()
export class MainCategoryUncheckedCreateWithoutSectionsInput {

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

    @Field(() => CategoryUncheckedCreateNestedManyWithoutMainCategoryInput, {nullable:true})
    categories?: CategoryUncheckedCreateNestedManyWithoutMainCategoryInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutMainCategoryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutMainCategoryInput;
}
