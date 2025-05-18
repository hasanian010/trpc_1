import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { MainCategoryUpdateWithoutProductsInput } from './main-category-update-without-products.input';

@InputType()
export class MainCategoryUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => MainCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => MainCategoryUpdateWithoutProductsInput)
    data!: MainCategoryUpdateWithoutProductsInput;
}
