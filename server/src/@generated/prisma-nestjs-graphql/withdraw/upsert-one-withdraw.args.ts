import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawCreateInput } from './withdraw-create.input';
import { WithdrawUpdateInput } from './withdraw-update.input';

@ArgsType()
export class UpsertOneWithdrawArgs {

    @Field(() => WithdrawWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => WithdrawCreateInput, {nullable:false})
    @Type(() => WithdrawCreateInput)
    create!: WithdrawCreateInput;

    @Field(() => WithdrawUpdateInput, {nullable:false})
    @Type(() => WithdrawUpdateInput)
    update!: WithdrawUpdateInput;
}
