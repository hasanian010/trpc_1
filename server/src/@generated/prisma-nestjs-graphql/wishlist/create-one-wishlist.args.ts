import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistCreateInput } from './wishlist-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWishlistArgs {

    @Field(() => WishlistCreateInput, {nullable:false})
    @Type(() => WishlistCreateInput)
    data!: WishlistCreateInput;
}
