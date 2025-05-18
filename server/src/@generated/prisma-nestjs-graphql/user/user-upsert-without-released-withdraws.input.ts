import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReleasedWithdrawsInput } from './user-update-without-released-withdraws.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReleasedWithdrawsInput } from './user-create-without-released-withdraws.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReleasedWithdrawsInput {

    @Field(() => UserUpdateWithoutReleasedWithdrawsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReleasedWithdrawsInput)
    update!: UserUpdateWithoutReleasedWithdrawsInput;

    @Field(() => UserCreateWithoutReleasedWithdrawsInput, {nullable:false})
    @Type(() => UserCreateWithoutReleasedWithdrawsInput)
    create!: UserCreateWithoutReleasedWithdrawsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
