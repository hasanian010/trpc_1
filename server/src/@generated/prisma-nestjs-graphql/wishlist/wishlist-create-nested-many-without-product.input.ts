import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistCreateWithoutProductInput } from './wishlist-create-without-product.input';
import { Type } from 'class-transformer';
import { WishlistCreateOrConnectWithoutProductInput } from './wishlist-create-or-connect-without-product.input';
import { WishlistCreateManyProductInputEnvelope } from './wishlist-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInput } from './wishlist-where-unique.input';

@InputType()
export class WishlistCreateNestedManyWithoutProductInput {

    @Field(() => [WishlistCreateWithoutProductInput], {nullable:true})
    @Type(() => WishlistCreateWithoutProductInput)
    create?: Array<WishlistCreateWithoutProductInput>;

    @Field(() => [WishlistCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => WishlistCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<WishlistCreateOrConnectWithoutProductInput>;

    @Field(() => WishlistCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => WishlistCreateManyProductInputEnvelope)
    createMany?: WishlistCreateManyProductInputEnvelope;

    @Field(() => [WishlistWhereUniqueInput], {nullable:true})
    @Type(() => WishlistWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WishlistWhereUniqueInput, 'id' | 'userId_productId'>>;
}
