import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SectionsScalarRelationFilter } from '../sections/sections-scalar-relation-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';

@InputType()
export class SectionProductWhereInput {

    @Field(() => [SectionProductWhereInput], {nullable:true})
    AND?: Array<SectionProductWhereInput>;

    @Field(() => [SectionProductWhereInput], {nullable:true})
    OR?: Array<SectionProductWhereInput>;

    @Field(() => [SectionProductWhereInput], {nullable:true})
    NOT?: Array<SectionProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sectionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SectionsScalarRelationFilter, {nullable:true})
    section?: SectionsScalarRelationFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;
}
