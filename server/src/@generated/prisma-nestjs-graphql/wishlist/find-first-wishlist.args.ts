import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistWhereInput } from './wishlist-where.input';
import { Type } from 'class-transformer';
import { WishlistOrderByWithRelationInput } from './wishlist-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WishlistScalarFieldEnum } from './wishlist-scalar-field.enum';

@ArgsType()
export class FindFirstWishlistArgs {

    @Field(() => WishlistWhereInput, {nullable:true})
    @Type(() => WishlistWhereInput)
    where?: WishlistWhereInput;

    @Field(() => [WishlistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WishlistOrderByWithRelationInput>;

    @Field(() => WishlistWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WishlistScalarFieldEnum], {nullable:true})
    distinct?: Array<`${WishlistScalarFieldEnum}`>;
}
