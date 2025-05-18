import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';
import { BankUpdateWithoutSellerInput } from './bank-update-without-seller.input';

@InputType()
export class BankUpdateToOneWithWhereWithoutSellerInput {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => BankUpdateWithoutSellerInput, {nullable:false})
    @Type(() => BankUpdateWithoutSellerInput)
    data!: BankUpdateWithoutSellerInput;
}
