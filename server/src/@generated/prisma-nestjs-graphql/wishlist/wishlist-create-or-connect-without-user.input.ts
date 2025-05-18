import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { Type } from 'class-transformer';
import { WishlistCreateWithoutUserInput } from './wishlist-create-without-user.input';

@InputType()
export class WishlistCreateOrConnectWithoutUserInput {

    @Field(() => WishlistWhereUniqueInput, {nullable:false})
    @Type(() => WishlistWhereUniqueInput)
    where!: Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>;

    @Field(() => WishlistCreateWithoutUserInput, {nullable:false})
    @Type(() => WishlistCreateWithoutUserInput)
    create!: WishlistCreateWithoutUserInput;
}
