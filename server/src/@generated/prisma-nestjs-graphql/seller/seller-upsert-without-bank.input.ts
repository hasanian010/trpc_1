import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutBankInput } from './seller-update-without-bank.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutBankInput } from './seller-create-without-bank.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutBankInput {

    @Field(() => SellerUpdateWithoutBankInput, {nullable:false})
    @Type(() => SellerUpdateWithoutBankInput)
    update!: SellerUpdateWithoutBankInput;

    @Field(() => SellerCreateWithoutBankInput, {nullable:false})
    @Type(() => SellerCreateWithoutBankInput)
    create!: SellerCreateWithoutBankInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
