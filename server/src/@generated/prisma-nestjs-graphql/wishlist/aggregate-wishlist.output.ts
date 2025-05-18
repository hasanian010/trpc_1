import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WishlistCountAggregate } from './wishlist-count-aggregate.output';
import { WishlistMinAggregate } from './wishlist-min-aggregate.output';
import { WishlistMaxAggregate } from './wishlist-max-aggregate.output';

@ObjectType()
export class AggregateWishlist {

    @Field(() => WishlistCountAggregate, {nullable:true})
    _count?: WishlistCountAggregate;

    @Field(() => WishlistMinAggregate, {nullable:true})
    _min?: WishlistMinAggregate;

    @Field(() => WishlistMaxAggregate, {nullable:true})
    _max?: WishlistMaxAggregate;
}
