import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistUpdateInput } from './wishlist-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';

@ArgsType()
export class UpdateOneWishlistArgs {

    @Field(() => WishlistUpdateInput, {nullable:false})
    @Type(() => WishlistUpdateInput)
    data!: WishlistUpdateInput;

    @Field(() => WishlistWhereUniqueInput, {nullable:false})
    @Type(() => WishlistWhereUniqueInput)
    where!: Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>;
}
