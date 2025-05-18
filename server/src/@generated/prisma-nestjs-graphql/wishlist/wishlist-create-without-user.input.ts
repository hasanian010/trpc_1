import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutWishlistsInput } from '../product/product-create-nested-one-without-wishlists.input';

@InputType()
export class WishlistCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutWishlistsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutWishlistsInput;
}
