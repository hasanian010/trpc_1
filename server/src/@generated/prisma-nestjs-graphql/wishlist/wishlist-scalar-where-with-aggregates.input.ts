import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class WishlistScalarWhereWithAggregatesInput {

    @Field(() => [WishlistScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WishlistScalarWhereWithAggregatesInput>;

    @Field(() => [WishlistScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WishlistScalarWhereWithAggregatesInput>;

    @Field(() => [WishlistScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WishlistScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
