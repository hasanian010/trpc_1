import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistCreateManyProductInput } from './wishlist-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class WishlistCreateManyProductInputEnvelope {

    @Field(() => [WishlistCreateManyProductInput], {nullable:false})
    @Type(() => WishlistCreateManyProductInput)
    data!: Array<WishlistCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
