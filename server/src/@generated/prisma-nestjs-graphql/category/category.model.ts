import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MainCategory } from '../main-category/main-category.model';
import { SubCategory } from '../sub-category/sub-category.model';
import { Product } from '../product/product.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:true})
    mainCategoryId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => MainCategory, {nullable:true})
    mainCategory?: MainCategory | null;

    @Field(() => [SubCategory], {nullable:true})
    subCategories?: Array<SubCategory>;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
