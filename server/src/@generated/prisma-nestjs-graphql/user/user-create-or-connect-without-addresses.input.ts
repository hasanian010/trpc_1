import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAddressesInput } from './user-create-without-addresses.input';

@InputType()
export class UserCreateOrConnectWithoutAddressesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutAddressesInput, {nullable:false})
    @Type(() => UserCreateWithoutAddressesInput)
    create!: UserCreateWithoutAddressesInput;
}
