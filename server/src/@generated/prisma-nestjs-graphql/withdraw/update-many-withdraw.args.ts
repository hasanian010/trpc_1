import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawUpdateManyMutationInput } from './withdraw-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WithdrawWhereInput } from './withdraw-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyWithdrawArgs {

    @Field(() => WithdrawUpdateManyMutationInput, {nullable:false})
    @Type(() => WithdrawUpdateManyMutationInput)
    data!: WithdrawUpdateManyMutationInput;

    @Field(() => WithdrawWhereInput, {nullable:true})
    @Type(() => WithdrawWhereInput)
    where?: WithdrawWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
