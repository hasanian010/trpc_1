import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWishlistsInput } from './user-create-without-wishlists.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWishlistsInput } from './user-create-or-connect-without-wishlists.input';
import { UserUpsertWithoutWishlistsInput } from './user-upsert-without-wishlists.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutWishlistsInput } from './user-update-to-one-with-where-without-wishlists.input';

@InputType()
export class UserUpdateOneRequiredWithoutWishlistsNestedInput {

    @Field(() => UserCreateWithoutWishlistsInput, {nullable:true})
    @Type(() => UserCreateWithoutWishlistsInput)
    create?: UserCreateWithoutWishlistsInput;

    @Field(() => UserCreateOrConnectWithoutWishlistsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWishlistsInput)
    connectOrCreate?: UserCreateOrConnectWithoutWishlistsInput;

    @Field(() => UserUpsertWithoutWishlistsInput, {nullable:true})
    @Type(() => UserUpsertWithoutWishlistsInput)
    upsert?: UserUpsertWithoutWishlistsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutWishlistsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutWishlistsInput)
    update?: UserUpdateToOneWithWhereWithoutWishlistsInput;
}
