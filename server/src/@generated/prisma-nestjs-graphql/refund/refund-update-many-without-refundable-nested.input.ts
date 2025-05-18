import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundCreateWithoutRefundableInput } from './refund-create-without-refundable.input';
import { Type } from 'class-transformer';
import { RefundCreateOrConnectWithoutRefundableInput } from './refund-create-or-connect-without-refundable.input';
import { RefundUpsertWithWhereUniqueWithoutRefundableInput } from './refund-upsert-with-where-unique-without-refundable.input';
import { RefundCreateManyRefundableInputEnvelope } from './refund-create-many-refundable-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { RefundUpdateWithWhereUniqueWithoutRefundableInput } from './refund-update-with-where-unique-without-refundable.input';
import { RefundUpdateManyWithWhereWithoutRefundableInput } from './refund-update-many-with-where-without-refundable.input';
import { RefundScalarWhereInput } from './refund-scalar-where.input';

@InputType()
export class RefundUpdateManyWithoutRefundableNestedInput {

    @Field(() => [RefundCreateWithoutRefundableInput], {nullable:true})
    @Type(() => RefundCreateWithoutRefundableInput)
    create?: Array<RefundCreateWithoutRefundableInput>;

    @Field(() => [RefundCreateOrConnectWithoutRefundableInput], {nullable:true})
    @Type(() => RefundCreateOrConnectWithoutRefundableInput)
    connectOrCreate?: Array<RefundCreateOrConnectWithoutRefundableInput>;

    @Field(() => [RefundUpsertWithWhereUniqueWithoutRefundableInput], {nullable:true})
    @Type(() => RefundUpsertWithWhereUniqueWithoutRefundableInput)
    upsert?: Array<RefundUpsertWithWhereUniqueWithoutRefundableInput>;

    @Field(() => RefundCreateManyRefundableInputEnvelope, {nullable:true})
    @Type(() => RefundCreateManyRefundableInputEnvelope)
    createMany?: RefundCreateManyRefundableInputEnvelope;

    @Field(() => [RefundWhereUniqueInput], {nullable:true})
    @Type(() => RefundWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefundWhereUniqueInput, 'id'>>;

    @Field(() => [RefundWhereUniqueInput], {nullable:true})
    @Type(() => RefundWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefundWhereUniqueInput, 'id'>>;

    @Field(() => [RefundWhereUniqueInput], {nullable:true})
    @Type(() => RefundWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefundWhereUniqueInput, 'id'>>;

    @Field(() => [RefundWhereUniqueInput], {nullable:true})
    @Type(() => RefundWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundWhereUniqueInput, 'id'>>;

    @Field(() => [RefundUpdateWithWhereUniqueWithoutRefundableInput], {nullable:true})
    @Type(() => RefundUpdateWithWhereUniqueWithoutRefundableInput)
    update?: Array<RefundUpdateWithWhereUniqueWithoutRefundableInput>;

    @Field(() => [RefundUpdateManyWithWhereWithoutRefundableInput], {nullable:true})
    @Type(() => RefundUpdateManyWithWhereWithoutRefundableInput)
    updateMany?: Array<RefundUpdateManyWithWhereWithoutRefundableInput>;

    @Field(() => [RefundScalarWhereInput], {nullable:true})
    @Type(() => RefundScalarWhereInput)
    deleteMany?: Array<RefundScalarWhereInput>;
}
