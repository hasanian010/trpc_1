import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutWishlistsInput } from './product-create-without-wishlists.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutWishlistsInput } from './product-create-or-connect-without-wishlists.input';
import { ProductUpsertWithoutWishlistsInput } from './product-upsert-without-wishlists.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutWishlistsInput } from './product-update-to-one-with-where-without-wishlists.input';

@InputType()
export class ProductUpdateOneRequiredWithoutWishlistsNestedInput {

    @Field(() => ProductCreateWithoutWishlistsInput, {nullable:true})
    @Type(() => ProductCreateWithoutWishlistsInput)
    create?: ProductCreateWithoutWishlistsInput;

    @Field(() => ProductCreateOrConnectWithoutWishlistsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutWishlistsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutWishlistsInput;

    @Field(() => ProductUpsertWithoutWishlistsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutWishlistsInput)
    upsert?: ProductUpsertWithoutWishlistsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutWishlistsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutWishlistsInput)
    update?: ProductUpdateToOneWithWhereWithoutWishlistsInput;
}
