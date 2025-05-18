import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryUpdateWithoutProductsInput } from './main-category-update-without-products.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateWithoutProductsInput } from './main-category-create-without-products.input';
import { MainCategoryWhereInput } from './main-category-where.input';

@InputType()
export class MainCategoryUpsertWithoutProductsInput {

    @Field(() => MainCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => MainCategoryUpdateWithoutProductsInput)
    update!: MainCategoryUpdateWithoutProductsInput;

    @Field(() => MainCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => MainCategoryCreateWithoutProductsInput)
    create!: MainCategoryCreateWithoutProductsInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;
}
