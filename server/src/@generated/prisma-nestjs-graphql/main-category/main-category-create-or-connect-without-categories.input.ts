import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateWithoutCategoriesInput } from './main-category-create-without-categories.input';

@InputType()
export class MainCategoryCreateOrConnectWithoutCategoriesInput {

    @Field(() => MainCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MainCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => MainCategoryCreateWithoutCategoriesInput)
    create!: MainCategoryCreateWithoutCategoriesInput;
}
