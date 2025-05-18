import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateNestedOneWithoutBankInput } from '../seller/seller-create-nested-one-without-bank.input';

@InputType()
export class BankCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    accNumber!: string;

    @Field(() => String, {nullable:false})
    routing!: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    branch!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SellerCreateNestedOneWithoutBankInput, {nullable:true})
    seller?: SellerCreateNestedOneWithoutBankInput;
}
