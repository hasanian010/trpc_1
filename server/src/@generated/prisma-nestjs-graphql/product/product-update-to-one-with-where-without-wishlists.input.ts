import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutWishlistsInput } from './product-update-without-wishlists.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutWishlistsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutWishlistsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutWishlistsInput)
    data!: ProductUpdateWithoutWishlistsInput;
}
