import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistCreateManyUserInput } from './wishlist-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class WishlistCreateManyUserInputEnvelope {

    @Field(() => [WishlistCreateManyUserInput], {nullable:false})
    @Type(() => WishlistCreateManyUserInput)
    data!: Array<WishlistCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
