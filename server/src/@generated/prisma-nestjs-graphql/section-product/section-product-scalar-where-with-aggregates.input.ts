import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SectionProductScalarWhereWithAggregatesInput {

    @Field(() => [SectionProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SectionProductScalarWhereWithAggregatesInput>;

    @Field(() => [SectionProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SectionProductScalarWhereWithAggregatesInput>;

    @Field(() => [SectionProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SectionProductScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sectionId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
