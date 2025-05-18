import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutWishlistsInput } from './product-create-without-wishlists.input';

@InputType()
export class ProductCreateOrConnectWithoutWishlistsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutWishlistsInput, {nullable:false})
    @Type(() => ProductCreateWithoutWishlistsInput)
    create!: ProductCreateWithoutWishlistsInput;
}
