import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutMainCategoryInput } from './category-update-without-main-category.input';
import { CategoryCreateWithoutMainCategoryInput } from './category-create-without-main-category.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutMainCategoryInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutMainCategoryInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutMainCategoryInput)
    update!: CategoryUpdateWithoutMainCategoryInput;

    @Field(() => CategoryCreateWithoutMainCategoryInput, {nullable:false})
    @Type(() => CategoryCreateWithoutMainCategoryInput)
    create!: CategoryCreateWithoutMainCategoryInput;
}
