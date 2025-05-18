import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { Type } from 'class-transformer';
import { BankCreateWithoutSellerInput } from './bank-create-without-seller.input';

@InputType()
export class BankCreateOrConnectWithoutSellerInput {

    @Field(() => BankWhereUniqueInput, {nullable:false})
    @Type(() => BankWhereUniqueInput)
    where!: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'sellerId'>;

    @Field(() => BankCreateWithoutSellerInput, {nullable:false})
    @Type(() => BankCreateWithoutSellerInput)
    create!: BankCreateWithoutSellerInput;
}
