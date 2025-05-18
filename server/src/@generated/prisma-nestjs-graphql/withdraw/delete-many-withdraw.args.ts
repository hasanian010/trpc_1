import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawWhereInput } from './withdraw-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyWithdrawArgs {

    @Field(() => WithdrawWhereInput, {nullable:true})
    @Type(() => WithdrawWhereInput)
    where?: WithdrawWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
