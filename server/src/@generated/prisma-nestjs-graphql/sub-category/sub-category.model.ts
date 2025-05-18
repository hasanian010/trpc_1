import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Product } from '../product/product.model';
import { SubCategoryCount } from './sub-category-count.output';

@ObjectType()
export class SubCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    categoryId!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Category, {nullable:true})
    category?: Category | null;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => SubCategoryCount, {nullable:false})
    _count?: SubCategoryCount;
}
