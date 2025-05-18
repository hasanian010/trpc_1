import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWishlistsInput } from './user-create-without-wishlists.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWishlistsInput } from './user-create-or-connect-without-wishlists.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWishlistsInput {

    @Field(() => UserCreateWithoutWishlistsInput, {nullable:true})
    @Type(() => UserCreateWithoutWishlistsInput)
    create?: UserCreateWithoutWishlistsInput;

    @Field(() => UserCreateOrConnectWithoutWishlistsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWishlistsInput)
    connectOrCreate?: UserCreateOrConnectWithoutWishlistsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
