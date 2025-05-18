import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReleasedWithdrawsInput } from './user-update-without-released-withdraws.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReleasedWithdrawsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReleasedWithdrawsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReleasedWithdrawsInput)
    data!: UserUpdateWithoutReleasedWithdrawsInput;
}
