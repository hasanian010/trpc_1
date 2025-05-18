import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { Type } from 'class-transformer';
import { WishlistCreateInput } from './wishlist-create.input';
import { WishlistUpdateInput } from './wishlist-update.input';

@ArgsType()
export class UpsertOneWishlistArgs {

    @Field(() => WishlistWhereUniqueInput, {nullable:false})
    @Type(() => WishlistWhereUniqueInput)
    where!: Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>;

    @Field(() => WishlistCreateInput, {nullable:false})
    @Type(() => WishlistCreateInput)
    create!: WishlistCreateInput;

    @Field(() => WishlistUpdateInput, {nullable:false})
    @Type(() => WishlistUpdateInput)
    update!: WishlistUpdateInput;
}
