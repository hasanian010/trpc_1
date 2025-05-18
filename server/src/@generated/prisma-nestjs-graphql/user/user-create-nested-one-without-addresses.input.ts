import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAddressesInput } from './user-create-without-addresses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAddressesInput } from './user-create-or-connect-without-addresses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAddressesInput {

    @Field(() => UserCreateWithoutAddressesInput, {nullable:true})
    @Type(() => UserCreateWithoutAddressesInput)
    create?: UserCreateWithoutAddressesInput;

    @Field(() => UserCreateOrConnectWithoutAddressesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAddressesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
