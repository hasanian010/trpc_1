import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawCreateWithoutSellerInput } from './withdraw-create-without-seller.input';
import { Type } from 'class-transformer';
import { WithdrawCreateOrConnectWithoutSellerInput } from './withdraw-create-or-connect-without-seller.input';
import { WithdrawUpsertWithWhereUniqueWithoutSellerInput } from './withdraw-upsert-with-where-unique-without-seller.input';
import { WithdrawCreateManySellerInputEnvelope } from './withdraw-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { WithdrawUpdateWithWhereUniqueWithoutSellerInput } from './withdraw-update-with-where-unique-without-seller.input';
import { WithdrawUpdateManyWithWhereWithoutSellerInput } from './withdraw-update-many-with-where-without-seller.input';
import { WithdrawScalarWhereInput } from './withdraw-scalar-where.input';

@InputType()
export class WithdrawUncheckedUpdateManyWithoutSellerNestedInput {

    @Field(() => [WithdrawCreateWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawCreateWithoutSellerInput)
    create?: Array<WithdrawCreateWithoutSellerInput>;

    @Field(() => [WithdrawCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<WithdrawCreateOrConnectWithoutSellerInput>;

    @Field(() => [WithdrawUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<WithdrawUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => WithdrawCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => WithdrawCreateManySellerInputEnvelope)
    createMany?: WithdrawCreateManySellerInputEnvelope;

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

    @Field(() => [WithdrawUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<WithdrawUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [WithdrawUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<WithdrawUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [WithdrawScalarWhereInput], {nullable:true})
    @Type(() => WithdrawScalarWhereInput)
    deleteMany?: Array<WithdrawScalarWhereInput>;
}
