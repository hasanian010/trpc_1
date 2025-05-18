import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Product } from '../product/product.model';
import { Sections } from '../sections/sections.model';
import { MainCategoryCount } from './main-category-count.output';

@ObjectType()
export class MainCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => [Sections], {nullable:true})
    sections?: Array<Sections>;

    @Field(() => MainCategoryCount, {nullable:false})
    _count?: MainCategoryCount;
}
