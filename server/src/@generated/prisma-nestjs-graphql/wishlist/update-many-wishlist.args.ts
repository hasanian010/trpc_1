import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistUpdateManyMutationInput } from './wishlist-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WishlistWhereInput } from './wishlist-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyWishlistArgs {

    @Field(() => WishlistUpdateManyMutationInput, {nullable:false})
    @Type(() => WishlistUpdateManyMutationInput)
    data!: WishlistUpdateManyMutationInput;

    @Field(() => WishlistWhereInput, {nullable:true})
    @Type(() => WishlistWhereInput)
    where?: WishlistWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
