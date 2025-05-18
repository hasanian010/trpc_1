import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAddressesInput } from './user-create-without-addresses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAddressesInput } from './user-create-or-connect-without-addresses.input';
import { UserUpsertWithoutAddressesInput } from './user-upsert-without-addresses.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAddressesInput } from './user-update-to-one-with-where-without-addresses.input';

@InputType()
export class UserUpdateOneWithoutAddressesNestedInput {

    @Field(() => UserCreateWithoutAddressesInput, {nullable:true})
    @Type(() => UserCreateWithoutAddressesInput)
    create?: UserCreateWithoutAddressesInput;

    @Field(() => UserCreateOrConnectWithoutAddressesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAddressesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput;

    @Field(() => UserUpsertWithoutAddressesInput, {nullable:true})
    @Type(() => UserUpsertWithoutAddressesInput)
    upsert?: UserUpsertWithoutAddressesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAddressesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAddressesInput)
    update?: UserUpdateToOneWithWhereWithoutAddressesInput;
}
