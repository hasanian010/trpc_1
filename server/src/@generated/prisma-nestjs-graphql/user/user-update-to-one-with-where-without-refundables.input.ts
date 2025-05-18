import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRefundablesInput } from './user-update-without-refundables.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRefundablesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRefundablesInput)
    data!: UserUpdateWithoutRefundablesInput;
}
