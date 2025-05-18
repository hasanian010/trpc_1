import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawCreateWithoutReleasedByInput } from './withdraw-create-without-released-by.input';

@InputType()
export class WithdrawCreateOrConnectWithoutReleasedByInput {

    @Field(() => WithdrawWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => WithdrawCreateWithoutReleasedByInput, {nullable:false})
    @Type(() => WithdrawCreateWithoutReleasedByInput)
    create!: WithdrawCreateWithoutReleasedByInput;
}
