import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductSpecificationScalarWhereWithAggregatesInput {

    @Field(() => [ProductSpecificationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductSpecificationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductSpecificationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductSpecificationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductSpecificationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductSpecificationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    title?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    value?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
