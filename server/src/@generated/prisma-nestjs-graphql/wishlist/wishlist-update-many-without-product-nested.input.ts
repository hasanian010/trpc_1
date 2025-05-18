import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistCreateWithoutProductInput } from './wishlist-create-without-product.input';
import { Type } from 'class-transformer';
import { WishlistCreateOrConnectWithoutProductInput } from './wishlist-create-or-connect-without-product.input';
import { WishlistUpsertWithWhereUniqueWithoutProductInput } from './wishlist-upsert-with-where-unique-without-product.input';
import { WishlistCreateManyProductInputEnvelope } from './wishlist-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';
import { WishlistUpdateWithWhereUniqueWithoutProductInput } from './wishlist-update-with-where-unique-without-product.input';
import { WishlistUpdateManyWithWhereWithoutProductInput } from './wishlist-update-many-with-where-without-product.input';
import { WishlistScalarWhereInput } from './wishlist-scalar-where.input';

@InputType()
export class WishlistUpdateManyWithoutProductNestedInput {

    @Field(() => [WishlistCreateWithoutProductInput], {nullable:true})
    @Type(() => WishlistCreateWithoutProductInput)
    create?: Array<WishlistCreateWithoutProductInput>;

    @Field(() => [WishlistCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => WishlistCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<WishlistCreateOrConnectWithoutProductInput>;

    @Field(() => [WishlistUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => WishlistUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<WishlistUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => WishlistCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => WishlistCreateManyProductInputEnvelope)
    createMany?: WishlistCreateManyProductInputEnvelope;

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

    @Field(() => [WishlistUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => WishlistUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<WishlistUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [WishlistUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => WishlistUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<WishlistUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [WishlistScalarWhereInput], {nullable:true})
    @Type(() => WishlistScalarWhereInput)
    deleteMany?: Array<WishlistScalarWhereInput>;
}
