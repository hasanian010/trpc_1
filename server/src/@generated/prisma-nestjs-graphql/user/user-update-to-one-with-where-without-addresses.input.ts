import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAddressesInput } from './user-update-without-addresses.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAddressesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAddressesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAddressesInput)
    data!: UserUpdateWithoutAddressesInput;
}
