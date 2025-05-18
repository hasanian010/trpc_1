import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeCreateWithoutSellerInput } from './income-create-without-seller.input';
import { Type } from 'class-transformer';
import { IncomeCreateOrConnectWithoutSellerInput } from './income-create-or-connect-without-seller.input';
import { IncomeUpsertWithWhereUniqueWithoutSellerInput } from './income-upsert-with-where-unique-without-seller.input';
import { IncomeCreateManySellerInputEnvelope } from './income-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { IncomeUpdateWithWhereUniqueWithoutSellerInput } from './income-update-with-where-unique-without-seller.input';
import { IncomeUpdateManyWithWhereWithoutSellerInput } from './income-update-many-with-where-without-seller.input';
import { IncomeScalarWhereInput } from './income-scalar-where.input';

@InputType()
export class IncomeUpdateManyWithoutSellerNestedInput {

    @Field(() => [IncomeCreateWithoutSellerInput], {nullable:true})
    @Type(() => IncomeCreateWithoutSellerInput)
    create?: Array<IncomeCreateWithoutSellerInput>;

    @Field(() => [IncomeCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => IncomeCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<IncomeCreateOrConnectWithoutSellerInput>;

    @Field(() => [IncomeUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => IncomeUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<IncomeUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => IncomeCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => IncomeCreateManySellerInputEnvelope)
    createMany?: IncomeCreateManySellerInputEnvelope;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => IncomeUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<IncomeUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [IncomeUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => IncomeUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<IncomeUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [IncomeScalarWhereInput], {nullable:true})
    @Type(() => IncomeScalarWhereInput)
    deleteMany?: Array<IncomeScalarWhereInput>;
}
