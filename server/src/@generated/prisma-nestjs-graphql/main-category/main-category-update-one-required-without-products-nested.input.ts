import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateWithoutProductsInput } from './main-category-create-without-products.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateOrConnectWithoutProductsInput } from './main-category-create-or-connect-without-products.input';
import { MainCategoryUpsertWithoutProductsInput } from './main-category-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { MainCategoryUpdateToOneWithWhereWithoutProductsInput } from './main-category-update-to-one-with-where-without-products.input';

@InputType()
export class MainCategoryUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => MainCategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => MainCategoryCreateWithoutProductsInput)
    create?: MainCategoryCreateWithoutProductsInput;

    @Field(() => MainCategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => MainCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: MainCategoryCreateOrConnectWithoutProductsInput;

    @Field(() => MainCategoryUpsertWithoutProductsInput, {nullable:true})
    @Type(() => MainCategoryUpsertWithoutProductsInput)
    upsert?: MainCategoryUpsertWithoutProductsInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MainCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => MainCategoryUpdateToOneWithWhereWithoutProductsInput)
    update?: MainCategoryUpdateToOneWithWhereWithoutProductsInput;
}
