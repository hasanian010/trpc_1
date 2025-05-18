import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAddressesInput } from './user-update-without-addresses.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAddressesInput } from './user-create-without-addresses.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAddressesInput {

    @Field(() => UserUpdateWithoutAddressesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAddressesInput)
    update!: UserUpdateWithoutAddressesInput;

    @Field(() => UserCreateWithoutAddressesInput, {nullable:false})
    @Type(() => UserCreateWithoutAddressesInput)
    create!: UserCreateWithoutAddressesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
