import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawUpdateInput } from './withdraw-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';

@ArgsType()
export class UpdateOneWithdrawArgs {

    @Field(() => WithdrawUpdateInput, {nullable:false})
    @Type(() => WithdrawUpdateInput)
    data!: WithdrawUpdateInput;

    @Field(() => WithdrawWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;
}
