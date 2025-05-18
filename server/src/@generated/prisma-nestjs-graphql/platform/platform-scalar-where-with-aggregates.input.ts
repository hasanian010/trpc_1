import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PlatformScalarWhereWithAggregatesInput {

    @Field(() => [PlatformScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlatformScalarWhereWithAggregatesInput>;

    @Field(() => [PlatformScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlatformScalarWhereWithAggregatesInput>;

    @Field(() => [PlatformScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlatformScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    charge?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
