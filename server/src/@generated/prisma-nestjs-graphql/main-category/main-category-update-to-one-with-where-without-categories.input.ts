import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { MainCategoryUpdateWithoutCategoriesInput } from './main-category-update-without-categories.input';

@InputType()
export class MainCategoryUpdateToOneWithWhereWithoutCategoriesInput {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => MainCategoryUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => MainCategoryUpdateWithoutCategoriesInput)
    data!: MainCategoryUpdateWithoutCategoriesInput;
}
