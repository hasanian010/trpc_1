import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserPointsScalarWhereWithAggregatesInput {

    @Field(() => [UserPointsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserPointsScalarWhereWithAggregatesInput>;

    @Field(() => [UserPointsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserPointsScalarWhereWithAggregatesInput>;

    @Field(() => [UserPointsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserPointsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    points?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
