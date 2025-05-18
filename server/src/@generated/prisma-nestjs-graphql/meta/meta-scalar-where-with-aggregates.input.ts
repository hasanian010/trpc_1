import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MetaScalarWhereWithAggregatesInput {

    @Field(() => [MetaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MetaScalarWhereWithAggregatesInput>;

    @Field(() => [MetaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MetaScalarWhereWithAggregatesInput>;

    @Field(() => [MetaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MetaScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    itemCount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalItems?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    itemsPerPage?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalPages?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currentPage?: IntWithAggregatesFilter;
}
