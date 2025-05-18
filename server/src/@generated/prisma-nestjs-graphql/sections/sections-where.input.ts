import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MainCategoryNullableScalarRelationFilter } from '../main-category/main-category-nullable-scalar-relation-filter.input';
import { SectionProductListRelationFilter } from '../section-product/section-product-list-relation-filter.input';

@InputType()
export class SectionsWhereInput {

    @Field(() => [SectionsWhereInput], {nullable:true})
    AND?: Array<SectionsWhereInput>;

    @Field(() => [SectionsWhereInput], {nullable:true})
    OR?: Array<SectionsWhereInput>;

    @Field(() => [SectionsWhereInput], {nullable:true})
    NOT?: Array<SectionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    publish?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    base?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    categoryId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MainCategoryNullableScalarRelationFilter, {nullable:true})
    category?: MainCategoryNullableScalarRelationFilter;

    @Field(() => SectionProductListRelationFilter, {nullable:true})
    sectionProducts?: SectionProductListRelationFilter;
}
