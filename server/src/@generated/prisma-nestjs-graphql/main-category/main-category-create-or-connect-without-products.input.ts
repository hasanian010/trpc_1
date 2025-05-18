import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateWithoutProductsInput } from './main-category-create-without-products.input';

@InputType()
export class MainCategoryCreateOrConnectWithoutProductsInput {

    @Field(() => MainCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MainCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => MainCategoryCreateWithoutProductsInput)
    create!: MainCategoryCreateWithoutProductsInput;
}
