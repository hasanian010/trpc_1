import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawCreateManyInput } from './withdraw-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWithdrawArgs {

    @Field(() => [WithdrawCreateManyInput], {nullable:false})
    @Type(() => WithdrawCreateManyInput)
    data!: Array<WithdrawCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
