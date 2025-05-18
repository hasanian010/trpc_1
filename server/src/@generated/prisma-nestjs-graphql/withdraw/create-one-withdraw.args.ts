import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawCreateInput } from './withdraw-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWithdrawArgs {

    @Field(() => WithdrawCreateInput, {nullable:false})
    @Type(() => WithdrawCreateInput)
    data!: WithdrawCreateInput;
}
