import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateWithoutProductsInput } from './main-category-create-without-products.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateOrConnectWithoutProductsInput } from './main-category-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';

@InputType()
export class MainCategoryCreateNestedOneWithoutProductsInput {

    @Field(() => MainCategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => MainCategoryCreateWithoutProductsInput)
    create?: MainCategoryCreateWithoutProductsInput;

    @Field(() => MainCategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => MainCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: MainCategoryCreateOrConnectWithoutProductsInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MainCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;
}
