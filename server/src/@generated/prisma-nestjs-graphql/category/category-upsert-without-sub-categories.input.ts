import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutSubCategoriesInput } from './category-update-without-sub-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutSubCategoriesInput } from './category-create-without-sub-categories.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutSubCategoriesInput {

    @Field(() => CategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutSubCategoriesInput)
    update!: CategoryUpdateWithoutSubCategoriesInput;

    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create!: CategoryCreateWithoutSubCategoriesInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
