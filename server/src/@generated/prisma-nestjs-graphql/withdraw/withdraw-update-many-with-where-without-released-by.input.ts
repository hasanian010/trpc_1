import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawScalarWhereInput } from './withdraw-scalar-where.input';
import { Type } from 'class-transformer';
import { WithdrawUpdateManyMutationInput } from './withdraw-update-many-mutation.input';

@InputType()
export class WithdrawUpdateManyWithWhereWithoutReleasedByInput {

    @Field(() => WithdrawScalarWhereInput, {nullable:false})
    @Type(() => WithdrawScalarWhereInput)
    where!: WithdrawScalarWhereInput;

    @Field(() => WithdrawUpdateManyMutationInput, {nullable:false})
    @Type(() => WithdrawUpdateManyMutationInput)
    data!: WithdrawUpdateManyMutationInput;
}
