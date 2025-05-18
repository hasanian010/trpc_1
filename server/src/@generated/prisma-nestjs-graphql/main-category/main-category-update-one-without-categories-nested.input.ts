import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateWithoutCategoriesInput } from './main-category-create-without-categories.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateOrConnectWithoutCategoriesInput } from './main-category-create-or-connect-without-categories.input';
import { MainCategoryUpsertWithoutCategoriesInput } from './main-category-upsert-without-categories.input';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { MainCategoryUpdateToOneWithWhereWithoutCategoriesInput } from './main-category-update-to-one-with-where-without-categories.input';

@InputType()
export class MainCategoryUpdateOneWithoutCategoriesNestedInput {

    @Field(() => MainCategoryCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => MainCategoryCreateWithoutCategoriesInput)
    create?: MainCategoryCreateWithoutCategoriesInput;

    @Field(() => MainCategoryCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => MainCategoryCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: MainCategoryCreateOrConnectWithoutCategoriesInput;

    @Field(() => MainCategoryUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => MainCategoryUpsertWithoutCategoriesInput)
    upsert?: MainCategoryUpsertWithoutCategoriesInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    disconnect?: MainCategoryWhereInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    delete?: MainCategoryWhereInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MainCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryUpdateToOneWithWhereWithoutCategoriesInput, {nullable:true})
    @Type(() => MainCategoryUpdateToOneWithWhereWithoutCategoriesInput)
    update?: MainCategoryUpdateToOneWithWhereWithoutCategoriesInput;
}
