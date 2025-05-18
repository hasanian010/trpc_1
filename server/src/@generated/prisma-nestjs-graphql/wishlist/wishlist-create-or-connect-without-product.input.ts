import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { Type } from 'class-transformer';
import { WishlistCreateWithoutProductInput } from './wishlist-create-without-product.input';

@InputType()
export class WishlistCreateOrConnectWithoutProductInput {

    @Field(() => WishlistWhereUniqueInput, {nullable:false})
    @Type(() => WishlistWhereUniqueInput)
    where!: Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>;

    @Field(() => WishlistCreateWithoutProductInput, {nullable:false})
    @Type(() => WishlistCreateWithoutProductInput)
    create!: WishlistCreateWithoutProductInput;
}
