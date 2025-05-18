import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutSubCategoriesInput } from '../product/product-unchecked-create-nested-many-without-sub-categories.input';

@InputType()
export class SubCategoryUncheckedCreateWithoutCategoryInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutSubCategoriesInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoriesInput;
}
