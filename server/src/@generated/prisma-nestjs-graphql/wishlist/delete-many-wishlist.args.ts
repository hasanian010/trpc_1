import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistWhereInput } from './wishlist-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyWishlistArgs {

    @Field(() => WishlistWhereInput, {nullable:true})
    @Type(() => WishlistWhereInput)
    where?: WishlistWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
