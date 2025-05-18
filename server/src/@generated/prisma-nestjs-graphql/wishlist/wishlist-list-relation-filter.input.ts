import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistWhereInput } from './wishlist-where.input';

@InputType()
export class WishlistListRelationFilter {

    @Field(() => WishlistWhereInput, {nullable:true})
    every?: WishlistWhereInput;

    @Field(() => WishlistWhereInput, {nullable:true})
    some?: WishlistWhereInput;

    @Field(() => WishlistWhereInput, {nullable:true})
    none?: WishlistWhereInput;
}
