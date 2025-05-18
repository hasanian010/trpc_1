import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawCreateWithoutReleasedByInput } from './withdraw-create-without-released-by.input';
import { Type } from 'class-transformer';
import { WithdrawCreateOrConnectWithoutReleasedByInput } from './withdraw-create-or-connect-without-released-by.input';
import { WithdrawUpsertWithWhereUniqueWithoutReleasedByInput } from './withdraw-upsert-with-where-unique-without-released-by.input';
import { WithdrawCreateManyReleasedByInputEnvelope } from './withdraw-create-many-released-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { WithdrawUpdateWithWhereUniqueWithoutReleasedByInput } from './withdraw-update-with-where-unique-without-released-by.input';
import { WithdrawUpdateManyWithWhereWithoutReleasedByInput } from './withdraw-update-many-with-where-without-released-by.input';
import { WithdrawScalarWhereInput } from './withdraw-scalar-where.input';

@InputType()
export class WithdrawUncheckedUpdateManyWithoutReleasedByNestedInput {

    @Field(() => [WithdrawCreateWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawCreateWithoutReleasedByInput)
    create?: Array<WithdrawCreateWithoutReleasedByInput>;

    @Field(() => [WithdrawCreateOrConnectWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawCreateOrConnectWithoutReleasedByInput)
    connectOrCreate?: Array<WithdrawCreateOrConnectWithoutReleasedByInput>;

    @Field(() => [WithdrawUpsertWithWhereUniqueWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawUpsertWithWhereUniqueWithoutReleasedByInput)
    upsert?: Array<WithdrawUpsertWithWhereUniqueWithoutReleasedByInput>;

    @Field(() => WithdrawCreateManyReleasedByInputEnvelope, {nullable:true})
    @Type(() => WithdrawCreateManyReleasedByInputEnvelope)
    createMany?: WithdrawCreateManyReleasedByInputEnvelope;

    @Field(() => [WithdrawWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>>;

    @Field(() => [WithdrawWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>>;

    @Field(() => [WithdrawWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>>;

    @Field(() => [WithdrawWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>>;

    @Field(() => [WithdrawUpdateWithWhereUniqueWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawUpdateWithWhereUniqueWithoutReleasedByInput)
    update?: Array<WithdrawUpdateWithWhereUniqueWithoutReleasedByInput>;

    @Field(() => [WithdrawUpdateManyWithWhereWithoutReleasedByInput], {nullable:true})
    @Type(() => WithdrawUpdateManyWithWhereWithoutReleasedByInput)
    updateMany?: Array<WithdrawUpdateManyWithWhereWithoutReleasedByInput>;

    @Field(() => [WithdrawScalarWhereInput], {nullable:true})
    @Type(() => WithdrawScalarWhereInput)
    deleteMany?: Array<WithdrawScalarWhereInput>;
}
