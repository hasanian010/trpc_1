import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawCreateWithoutReleasedByInput } from './withdraw-create-without-released-by.input';
import { Type } from 'class-transformer';
import { WithdrawCreateOrConnectWithoutReleasedByInput } from './withdraw-create-or-connect-without-released-by.input';
import { WithdrawCreateManyReleasedByInputEnvelope } from './withdraw-create-many-released-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';

@InputType()
export class WithdrawUncheckedCreateNestedManyWithoutReleasedByInput {

    @Field(() => [WithdrawCreateWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawCreateWithoutReleasedByInput)
    create?: Array<WithdrawCreateWithoutReleasedByInput>;

    @Field(() => [WithdrawCreateOrConnectWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawCreateOrConnectWithoutReleasedByInput)
    connectOrCreate?: Array<WithdrawCreateOrConnectWithoutReleasedByInput>;

    @Field(() => WithdrawCreateManyReleasedByInputEnvelope, {nullable:true})
    @Type(() => WithdrawCreateManyReleasedByInputEnvelope)
    createMany?: WithdrawCreateManyReleasedByInputEnvelope;

    @Field(() => [WithdrawWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>>;
}
