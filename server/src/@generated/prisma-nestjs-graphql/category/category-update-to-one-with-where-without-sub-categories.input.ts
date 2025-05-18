import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutSubCategoriesInput } from './category-update-without-sub-categories.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutSubCategoriesInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutSubCategoriesInput)
    data!: CategoryUpdateWithoutSubCategoriesInput;
}
