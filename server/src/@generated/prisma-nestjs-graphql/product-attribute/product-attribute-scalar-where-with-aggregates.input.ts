import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductAttributeScalarWhereWithAggregatesInput {

    @Field(() => [ProductAttributeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductAttributeScalarWhereWithAggregatesInput>;

    @Field(() => [ProductAttributeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductAttributeScalarWhereWithAggregatesInput>;

    @Field(() => [ProductAttributeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductAttributeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
