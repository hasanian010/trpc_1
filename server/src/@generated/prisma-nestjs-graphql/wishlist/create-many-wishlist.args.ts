import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WishlistCreateManyInput } from './wishlist-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWishlistArgs {

    @Field(() => [WishlistCreateManyInput], {nullable:false})
    @Type(() => WishlistCreateManyInput)
    data!: Array<WishlistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
