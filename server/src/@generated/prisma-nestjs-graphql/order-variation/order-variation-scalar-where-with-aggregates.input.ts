import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderVariationScalarWhereWithAggregatesInput {

    @Field(() => [OrderVariationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderVariationScalarWhereWithAggregatesInput>;

    @Field(() => [OrderVariationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderVariationScalarWhereWithAggregatesInput>;

    @Field(() => [OrderVariationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderVariationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    variant?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    orderProductId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
