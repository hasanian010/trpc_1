import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WishlistCountOrderByAggregateInput } from './wishlist-count-order-by-aggregate.input';
import { WishlistMaxOrderByAggregateInput } from './wishlist-max-order-by-aggregate.input';
import { WishlistMinOrderByAggregateInput } from './wishlist-min-order-by-aggregate.input';

@InputType()
export class WishlistOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => WishlistCountOrderByAggregateInput, {nullable:true})
    _count?: WishlistCountOrderByAggregateInput;

    @Field(() => WishlistMaxOrderByAggregateInput, {nullable:true})
    _max?: WishlistMaxOrderByAggregateInput;

    @Field(() => WishlistMinOrderByAggregateInput, {nullable:true})
    _min?: WishlistMinOrderByAggregateInput;
}
