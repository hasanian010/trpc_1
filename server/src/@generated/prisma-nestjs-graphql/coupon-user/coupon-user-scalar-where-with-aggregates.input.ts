import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CouponUserScalarWhereWithAggregatesInput {

    @Field(() => [CouponUserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CouponUserScalarWhereWithAggregatesInput>;

    @Field(() => [CouponUserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CouponUserScalarWhereWithAggregatesInput>;

    @Field(() => [CouponUserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CouponUserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    discount?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    discountUnit?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    points?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
