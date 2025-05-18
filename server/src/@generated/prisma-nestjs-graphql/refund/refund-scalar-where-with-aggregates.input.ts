import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RefundScalarWhereWithAggregatesInput {

    @Field(() => [RefundScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RefundScalarWhereWithAggregatesInput>;

    @Field(() => [RefundScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RefundScalarWhereWithAggregatesInput>;

    @Field(() => [RefundScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RefundScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refundableId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    quantity?: FloatNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reason?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
