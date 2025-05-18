import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankCreateWithoutSellerInput } from './bank-create-without-seller.input';
import { Type } from 'class-transformer';
import { BankCreateOrConnectWithoutSellerInput } from './bank-create-or-connect-without-seller.input';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';

@InputType()
export class BankUncheckedCreateNestedOneWithoutSellerInput {

    @Field(() => BankCreateWithoutSellerInput, {nullable:true})
    @Type(() => BankCreateWithoutSellerInput)
    create?: BankCreateWithoutSellerInput;

    @Field(() => BankCreateOrConnectWithoutSellerInput, {nullable:true})
    @Type(() => BankCreateOrConnectWithoutSellerInput)
    connectOrCreate?: BankCreateOrConnectWithoutSellerInput;

    @Field(() => BankWhereUniqueInput, {nullable:true})
    @Type(() => BankWhereUniqueInput)
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'sellerId'>;
}
