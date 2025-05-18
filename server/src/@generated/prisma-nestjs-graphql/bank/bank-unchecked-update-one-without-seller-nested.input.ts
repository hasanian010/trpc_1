import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankCreateWithoutSellerInput } from './bank-create-without-seller.input';
import { Type } from 'class-transformer';
import { BankCreateOrConnectWithoutSellerInput } from './bank-create-or-connect-without-seller.input';
import { BankUpsertWithoutSellerInput } from './bank-upsert-without-seller.input';
import { BankWhereInput } from './bank-where.input';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { BankUpdateToOneWithWhereWithoutSellerInput } from './bank-update-to-one-with-where-without-seller.input';

@InputType()
export class BankUncheckedUpdateOneWithoutSellerNestedInput {

    @Field(() => BankCreateWithoutSellerInput, {nullable:true})
    @Type(() => BankCreateWithoutSellerInput)
    create?: BankCreateWithoutSellerInput;

    @Field(() => BankCreateOrConnectWithoutSellerInput, {nullable:true})
    @Type(() => BankCreateOrConnectWithoutSellerInput)
    connectOrCreate?: BankCreateOrConnectWithoutSellerInput;

    @Field(() => BankUpsertWithoutSellerInput, {nullable:true})
    @Type(() => BankUpsertWithoutSellerInput)
    upsert?: BankUpsertWithoutSellerInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    disconnect?: BankWhereInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    delete?: BankWhereInput;

    @Field(() => BankWhereUniqueInput, {nullable:true})
    @Type(() => BankWhereUniqueInput)
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'sellerId'>;

    @Field(() => BankUpdateToOneWithWhereWithoutSellerInput, {nullable:true})
    @Type(() => BankUpdateToOneWithWhereWithoutSellerInput)
    update?: BankUpdateToOneWithWhereWithoutSellerInput;
}
