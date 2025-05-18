import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRefundablesInput } from './user-update-without-refundables.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRefundablesInput } from './user-create-without-refundables.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRefundablesInput {

    @Field(() => UserUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRefundablesInput)
    update!: UserUpdateWithoutRefundablesInput;

    @Field(() => UserCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => UserCreateWithoutRefundablesInput)
    create!: UserCreateWithoutRefundablesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
