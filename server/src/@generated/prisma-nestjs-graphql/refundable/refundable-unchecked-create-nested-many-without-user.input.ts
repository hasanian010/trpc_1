import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutUserInput } from './refundable-create-without-user.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutUserInput } from './refundable-create-or-connect-without-user.input';
import { RefundableCreateManyUserInputEnvelope } from './refundable-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RefundableCreateWithoutUserInput], {nullable:true})
    @Type(() => RefundableCreateWithoutUserInput)
    create?: Array<RefundableCreateWithoutUserInput>;

    @Field(() => [RefundableCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutUserInput>;

    @Field(() => RefundableCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyUserInputEnvelope)
    createMany?: RefundableCreateManyUserInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;
}
