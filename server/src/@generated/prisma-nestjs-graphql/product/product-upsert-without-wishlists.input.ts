import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutWishlistsInput } from './product-update-without-wishlists.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutWishlistsInput } from './product-create-without-wishlists.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutWishlistsInput {

    @Field(() => ProductUpdateWithoutWishlistsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutWishlistsInput)
    update!: ProductUpdateWithoutWishlistsInput;

    @Field(() => ProductCreateWithoutWishlistsInput, {nullable:false})
    @Type(() => ProductCreateWithoutWishlistsInput)
    create!: ProductCreateWithoutWishlistsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
