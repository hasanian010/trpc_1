import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWishlistsInput } from './user-create-without-wishlists.input';

@InputType()
export class UserCreateOrConnectWithoutWishlistsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutWishlistsInput, {nullable:false})
    @Type(() => UserCreateWithoutWishlistsInput)
    create!: UserCreateWithoutWishlistsInput;
}
