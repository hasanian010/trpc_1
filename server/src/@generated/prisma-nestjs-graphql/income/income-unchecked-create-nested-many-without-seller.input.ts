import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeCreateWithoutSellerInput } from './income-create-without-seller.input';
import { Type } from 'class-transformer';
import { IncomeCreateOrConnectWithoutSellerInput } from './income-create-or-connect-without-seller.input';
import { IncomeCreateManySellerInputEnvelope } from './income-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';

@InputType()
export class IncomeUncheckedCreateNestedManyWithoutSellerInput {

    @Field(() => [IncomeCreateWithoutSellerInput], {nullable:true})
    @Type(() => IncomeCreateWithoutSellerInput)
    create?: Array<IncomeCreateWithoutSellerInput>;

    @Field(() => [IncomeCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => IncomeCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<IncomeCreateOrConnectWithoutSellerInput>;

    @Field(() => IncomeCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => IncomeCreateManySellerInputEnvelope)
    createMany?: IncomeCreateManySellerInputEnvelope;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;
}
