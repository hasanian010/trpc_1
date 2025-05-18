import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryNullableScalarRelationFilter } from '../category/category-nullable-scalar-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class SubCategoryWhereInput {

    @Field(() => [SubCategoryWhereInput], {nullable:true})
    AND?: Array<SubCategoryWhereInput>;

    @Field(() => [SubCategoryWhereInput], {nullable:true})
    OR?: Array<SubCategoryWhereInput>;

    @Field(() => [SubCategoryWhereInput], {nullable:true})
    NOT?: Array<SubCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    categoryId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CategoryNullableScalarRelationFilter, {nullable:true})
    category?: CategoryNullableScalarRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
