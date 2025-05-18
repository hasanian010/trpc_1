import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutUserInput } from './refundable-create-without-user.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutUserInput } from './refundable-create-or-connect-without-user.input';
import { RefundableUpsertWithWhereUniqueWithoutUserInput } from './refundable-upsert-with-where-unique-without-user.input';
import { RefundableCreateManyUserInputEnvelope } from './refundable-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { RefundableUpdateWithWhereUniqueWithoutUserInput } from './refundable-update-with-where-unique-without-user.input';
import { RefundableUpdateManyWithWhereWithoutUserInput } from './refundable-update-many-with-where-without-user.input';
import { RefundableScalarWhereInput } from './refundable-scalar-where.input';

@InputType()
export class RefundableUpdateManyWithoutUserNestedInput {

    @Field(() => [RefundableCreateWithoutUserInput], {nullable:true})
    @Type(() => RefundableCreateWithoutUserInput)
    create?: Array<RefundableCreateWithoutUserInput>;

    @Field(() => [RefundableCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutUserInput>;

    @Field(() => [RefundableUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefundableUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RefundableUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RefundableCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyUserInputEnvelope)
    createMany?: RefundableCreateManyUserInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefundableUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RefundableUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RefundableUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RefundableUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RefundableUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    @Type(() => RefundableScalarWhereInput)
    deleteMany?: Array<RefundableScalarWhereInput>;
}
