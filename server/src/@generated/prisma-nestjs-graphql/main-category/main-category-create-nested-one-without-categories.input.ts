import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateWithoutCategoriesInput } from './main-category-create-without-categories.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateOrConnectWithoutCategoriesInput } from './main-category-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';

@InputType()
export class MainCategoryCreateNestedOneWithoutCategoriesInput {

    @Field(() => MainCategoryCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => MainCategoryCreateWithoutCategoriesInput)
    create?: MainCategoryCreateWithoutCategoriesInput;

    @Field(() => MainCategoryCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => MainCategoryCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: MainCategoryCreateOrConnectWithoutCategoriesInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MainCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;
}
