import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistCreateWithoutUserInput } from './wishlist-create-without-user.input';
import { Type } from 'class-transformer';
import { WishlistCreateOrConnectWithoutUserInput } from './wishlist-create-or-connect-without-user.input';
import { WishlistUpsertWithWhereUniqueWithoutUserInput } from './wishlist-upsert-with-where-unique-without-user.input';
import { WishlistCreateManyUserInputEnvelope } from './wishlist-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { WishlistUpdateWithWhereUniqueWithoutUserInput } from './wishlist-update-with-where-unique-without-user.input';
import { WishlistUpdateManyWithWhereWithoutUserInput } from './wishlist-update-many-with-where-without-user.input';
import { WishlistScalarWhereInput } from './wishlist-scalar-where.input';

@InputType()
export class WishlistUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [WishlistCreateWithoutUserInput], {nullable:true})
    @Type(() => WishlistCreateWithoutUserInput)
    create?: Array<WishlistCreateWithoutUserInput>;

    @Field(() => [WishlistCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WishlistCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WishlistCreateOrConnectWithoutUserInput>;

    @Field(() => [WishlistUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WishlistUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<WishlistUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => WishlistCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WishlistCreateManyUserInputEnvelope)
    createMany?: WishlistCreateManyUserInputEnvelope;

    @Field(() => [WishlistWhereUniqueInput], {nullable:true})
    @Type(() => WishlistWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>>;

    @Field(() => [WishlistWhereUniqueInput], {nullable:true})
    @Type(() => WishlistWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>>;

    @Field(() => [WishlistWhereUniqueInput], {nullable:true})
    @Type(() => WishlistWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>>;

    @Field(() => [WishlistWhereUniqueInput], {nullable:true})
    @Type(() => WishlistWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>>;

    @Field(() => [WishlistUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WishlistUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<WishlistUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [WishlistUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => WishlistUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<WishlistUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [WishlistScalarWhereInput], {nullable:true})
    @Type(() => WishlistScalarWhereInput)
    deleteMany?: Array<WishlistScalarWhereInput>;
}
