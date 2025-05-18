import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutSubCategoriesInput } from './category-create-without-sub-categories.input';

@InputType()
export class CategoryCreateOrConnectWithoutSubCategoriesInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create!: CategoryCreateWithoutSubCategoriesInput;
}
