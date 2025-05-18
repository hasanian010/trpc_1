import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WishlistCountAggregate } from './wishlist-count-aggregate.output';
import { WishlistMinAggregate } from './wishlist-min-aggregate.output';
import { WishlistMaxAggregate } from './wishlist-max-aggregate.output';

@ObjectType()
export class WishlistGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => WishlistCountAggregate, {nullable:true})
    _count?: WishlistCountAggregate;

    @Field(() => WishlistMinAggregate, {nullable:true})
    _min?: WishlistMinAggregate;

    @Field(() => WishlistMaxAggregate, {nullable:true})
    _max?: WishlistMaxAggregate;
}
