import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { SectionsListRelationFilter } from '../sections/sections-list-relation-filter.input';

@InputType()
export class MainCategoryWhereInput {

    @Field(() => [MainCategoryWhereInput], {nullable:true})
    AND?: Array<MainCategoryWhereInput>;

    @Field(() => [MainCategoryWhereInput], {nullable:true})
    OR?: Array<MainCategoryWhereInput>;

    @Field(() => [MainCategoryWhereInput], {nullable:true})
    NOT?: Array<MainCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    categories?: CategoryListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => SectionsListRelationFilter, {nullable:true})
    sections?: SectionsListRelationFilter;
}
