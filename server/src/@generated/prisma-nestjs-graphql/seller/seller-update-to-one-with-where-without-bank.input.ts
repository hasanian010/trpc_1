import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutBankInput } from './seller-update-without-bank.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutBankInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutBankInput, {nullable:false})
    @Type(() => SellerUpdateWithoutBankInput)
    data!: SellerUpdateWithoutBankInput;
}
