import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundCreateWithoutUserInput } from './refund-create-without-user.input';
import { Type } from 'class-transformer';
import { RefundCreateOrConnectWithoutUserInput } from './refund-create-or-connect-without-user.input';
import { RefundCreateManyUserInputEnvelope } from './refund-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';

@InputType()
export class RefundUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RefundCreateWithoutUserInput], {nullable:true})
    @Type(() => RefundCreateWithoutUserInput)
    create?: Array<RefundCreateWithoutUserInput>;

    @Field(() => [RefundCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefundCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefundCreateOrConnectWithoutUserInput>;

    @Field(() => RefundCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefundCreateManyUserInputEnvelope)
    createMany?: RefundCreateManyUserInputEnvelope;

    @Field(() => [RefundWhereUniqueInput], {nullable:true})
    @Type(() => RefundWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundWhereUniqueInput, 'id'>>;
}
