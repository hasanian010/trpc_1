import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BannerScalarWhereWithAggregatesInput {

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
