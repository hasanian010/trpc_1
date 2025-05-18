import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawUpdateWithoutReleasedByInput } from './withdraw-update-without-released-by.input';
import { WithdrawCreateWithoutReleasedByInput } from './withdraw-create-without-released-by.input';

@InputType()
export class WithdrawUpsertWithWhereUniqueWithoutReleasedByInput {

    @Field(() => WithdrawWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => WithdrawUpdateWithoutReleasedByInput, {nullable:false})
    @Type(() => WithdrawUpdateWithoutReleasedByInput)
    update!: WithdrawUpdateWithoutReleasedByInput;

    @Field(() => WithdrawCreateWithoutReleasedByInput, {nullable:false})
    @Type(() => WithdrawCreateWithoutReleasedByInput)
    create!: WithdrawCreateWithoutReleasedByInput;
}
