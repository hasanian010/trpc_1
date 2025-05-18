import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankUpdateWithoutSellerInput } from './bank-update-without-seller.input';
import { Type } from 'class-transformer';
import { BankCreateWithoutSellerInput } from './bank-create-without-seller.input';
import { BankWhereInput } from './bank-where.input';

@InputType()
export class BankUpsertWithoutSellerInput {

    @Field(() => BankUpdateWithoutSellerInput, {nullable:false})
    @Type(() => BankUpdateWithoutSellerInput)
    update!: BankUpdateWithoutSellerInput;

    @Field(() => BankCreateWithoutSellerInput, {nullable:false})
    @Type(() => BankCreateWithoutSellerInput)
    create!: BankCreateWithoutSellerInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;
}
