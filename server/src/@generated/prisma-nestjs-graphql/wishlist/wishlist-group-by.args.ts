import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistWhereInput } from './wishlist-where.input';
import { Type } from 'class-transformer';
import { WishlistOrderByWithAggregationInput } from './wishlist-order-by-with-aggregation.input';
import { WishlistScalarFieldEnum } from './wishlist-scalar-field.enum';
import { WishlistScalarWhereWithAggregatesInput } from './wishlist-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WishlistCountAggregateInput } from './wishlist-count-aggregate.input';
import { WishlistMinAggregateInput } from './wishlist-min-aggregate.input';
import { WishlistMaxAggregateInput } from './wishlist-max-aggregate.input';

@ArgsType()
export class WishlistGroupByArgs {

    @Field(() => WishlistWhereInput, {nullable:true})
    @Type(() => WishlistWhereInput)
    where?: WishlistWhereInput;

    @Field(() => [WishlistOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WishlistOrderByWithAggregationInput>;

    @Field(() => [WishlistScalarFieldEnum], {nullable:false})
    by!: Array<`${WishlistScalarFieldEnum}`>;

    @Field(() => WishlistScalarWhereWithAggregatesInput, {nullable:true})
    having?: WishlistScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WishlistCountAggregateInput, {nullable:true})
    _count?: WishlistCountAggregateInput;

    @Field(() => WishlistMinAggregateInput, {nullable:true})
    _min?: WishlistMinAggregateInput;

    @Field(() => WishlistMaxAggregateInput, {nullable:true})
    _max?: WishlistMaxAggregateInput;
}
