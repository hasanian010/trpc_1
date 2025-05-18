import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductAttributeVariantScalarWhereWithAggregatesInput {

    @Field(() => [ProductAttributeVariantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductAttributeVariantScalarWhereWithAggregatesInput>;

    @Field(() => [ProductAttributeVariantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductAttributeVariantScalarWhereWithAggregatesInput>;

    @Field(() => [ProductAttributeVariantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductAttributeVariantScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    selected?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productAttributeId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
