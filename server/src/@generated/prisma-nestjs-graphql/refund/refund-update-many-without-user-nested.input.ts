import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundCreateWithoutUserInput } from './refund-create-without-user.input';
import { Type } from 'class-transformer';
import { RefundCreateOrConnectWithoutUserInput } from './refund-create-or-connect-without-user.input';
import { RefundUpsertWithWhereUniqueWithoutUserInput } from './refund-upsert-with-where-unique-without-user.input';
import { RefundCreateManyUserInputEnvelope } from './refund-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { RefundUpdateWithWhereUniqueWithoutUserInput } from './refund-update-with-where-unique-without-user.input';
import { RefundUpdateManyWithWhereWithoutUserInput } from './refund-update-many-with-where-without-user.input';
import { RefundScalarWhereInput } from './refund-scalar-where.input';

@InputType()
export class RefundUpdateManyWithoutUserNestedInput {

    @Field(() => [RefundCreateWithoutUserInput], {nullable:true})
    @Type(() => RefundCreateWithoutUserInput)
    create?: Array<RefundCreateWithoutUserInput>;

    @Field(() => [RefundCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefundCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefundCreateOrConnectWithoutUserInput>;

    @Field(() => [RefundUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefundUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RefundUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RefundCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefundCreateManyUserInputEnvelope)
    createMany?: RefundCreateManyUserInputEnvelope;

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

    @Field(() => [RefundUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefundUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RefundUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RefundUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RefundUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RefundUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RefundScalarWhereInput], {nullable:true})
    @Type(() => RefundScalarWhereInput)
    deleteMany?: Array<RefundScalarWhereInput>;
}
