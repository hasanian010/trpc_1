import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWishlistsInput } from './user-update-without-wishlists.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWishlistsInput } from './user-create-without-wishlists.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutWishlistsInput {

    @Field(() => UserUpdateWithoutWishlistsInput, {nullable:false})
    @Type(() => UserUpdateWithoutWishlistsInput)
    update!: UserUpdateWithoutWishlistsInput;

    @Field(() => UserCreateWithoutWishlistsInput, {nullable:false})
    @Type(() => UserCreateWithoutWishlistsInput)
    create!: UserCreateWithoutWishlistsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
