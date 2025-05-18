import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRefundsInput } from './user-update-without-refunds.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRefundsInput } from './user-create-without-refunds.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRefundsInput {

    @Field(() => UserUpdateWithoutRefundsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRefundsInput)
    update!: UserUpdateWithoutRefundsInput;

    @Field(() => UserCreateWithoutRefundsInput, {nullable:false})
    @Type(() => UserCreateWithoutRefundsInput)
    create!: UserCreateWithoutRefundsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
