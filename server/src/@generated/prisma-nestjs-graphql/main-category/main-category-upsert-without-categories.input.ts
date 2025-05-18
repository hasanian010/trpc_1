import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryUpdateWithoutCategoriesInput } from './main-category-update-without-categories.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateWithoutCategoriesInput } from './main-category-create-without-categories.input';
import { MainCategoryWhereInput } from './main-category-where.input';

@InputType()
export class MainCategoryUpsertWithoutCategoriesInput {

    @Field(() => MainCategoryUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => MainCategoryUpdateWithoutCategoriesInput)
    update!: MainCategoryUpdateWithoutCategoriesInput;

    @Field(() => MainCategoryCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => MainCategoryCreateWithoutCategoriesInput)
    create!: MainCategoryCreateWithoutCategoriesInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;
}
