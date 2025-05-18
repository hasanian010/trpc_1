import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundCreateWithoutRefundableInput } from './refund-create-without-refundable.input';
import { Type } from 'class-transformer';
import { RefundCreateOrConnectWithoutRefundableInput } from './refund-create-or-connect-without-refundable.input';
import { RefundCreateManyRefundableInputEnvelope } from './refund-create-many-refundable-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';

@InputType()
export class RefundUncheckedCreateNestedManyWithoutRefundableInput {

    @Field(() => [RefundCreateWithoutRefundableInput], {nullable:true})
    @Type(() => RefundCreateWithoutRefundableInput)
    create?: Array<RefundCreateWithoutRefundableInput>;

    @Field(() => [RefundCreateOrConnectWithoutRefundableInput], {nullable:true})
    @Type(() => RefundCreateOrConnectWithoutRefundableInput)
    connectOrCreate?: Array<RefundCreateOrConnectWithoutRefundableInput>;

    @Field(() => RefundCreateManyRefundableInputEnvelope, {nullable:true})
    @Type(() => RefundCreateManyRefundableInputEnvelope)
    createMany?: RefundCreateManyRefundableInputEnvelope;

    @Field(() => [RefundWhereUniqueInput], {nullable:true})
    @Type(() => RefundWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundWhereUniqueInput, 'id'>>;
}
