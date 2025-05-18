import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { Type } from 'class-transformer';
import { WishlistUpdateWithoutUserInput } from './wishlist-update-without-user.input';
import { WishlistCreateWithoutUserInput } from './wishlist-create-without-user.input';

@InputType()
export class WishlistUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => WishlistWhereUniqueInput, {nullable:false})
    @Type(() => WishlistWhereUniqueInput)
    where!: Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>;

    @Field(() => WishlistUpdateWithoutUserInput, {nullable:false})
    @Type(() => WishlistUpdateWithoutUserInput)
    update!: WishlistUpdateWithoutUserInput;

    @Field(() => WishlistCreateWithoutUserInput, {nullable:false})
    @Type(() => WishlistCreateWithoutUserInput)
    create!: WishlistCreateWithoutUserInput;
}
