import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutWishlistsInput } from './product-create-without-wishlists.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutWishlistsInput } from './product-create-or-connect-without-wishlists.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutWishlistsInput {

    @Field(() => ProductCreateWithoutWishlistsInput, {nullable:true})
    @Type(() => ProductCreateWithoutWishlistsInput)
    create?: ProductCreateWithoutWishlistsInput;

    @Field(() => ProductCreateOrConnectWithoutWishlistsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutWishlistsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutWishlistsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
