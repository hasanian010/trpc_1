import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistCreateWithoutUserInput } from './wishlist-create-without-user.input';
import { Type } from 'class-transformer';
import { WishlistCreateOrConnectWithoutUserInput } from './wishlist-create-or-connect-without-user.input';
import { WishlistCreateManyUserInputEnvelope } from './wishlist-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';

@InputType()
export class WishlistUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [WishlistCreateWithoutUserInput], {nullable:true})
    @Type(() => WishlistCreateWithoutUserInput)
    create?: Array<WishlistCreateWithoutUserInput>;

    @Field(() => [WishlistCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WishlistCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WishlistCreateOrConnectWithoutUserInput>;

    @Field(() => WishlistCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WishlistCreateManyUserInputEnvelope)
    createMany?: WishlistCreateManyUserInputEnvelope;

    @Field(() => [WishlistWhereUniqueInput], {nullable:true})
    @Type(() => WishlistWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>>;
}
