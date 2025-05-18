import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutMainCategoryInput } from './category-create-without-main-category.input';

@InputType()
export class CategoryCreateOrConnectWithoutMainCategoryInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutMainCategoryInput, {nullable:false})
    @Type(() => CategoryCreateWithoutMainCategoryInput)
    create!: CategoryCreateWithoutMainCategoryInput;
}
