import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProviderScalarWhereWithAggregatesInput {

    @Field(() => [ProviderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProviderScalarWhereWithAggregatesInput>;

    @Field(() => [ProviderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProviderScalarWhereWithAggregatesInput>;

    @Field(() => [ProviderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProviderScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
