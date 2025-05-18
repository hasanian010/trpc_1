import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutWishlistsInput } from './user-update-without-wishlists.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutWishlistsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutWishlistsInput, {nullable:false})
    @Type(() => UserUpdateWithoutWishlistsInput)
    data!: UserUpdateWithoutWishlistsInput;
}
