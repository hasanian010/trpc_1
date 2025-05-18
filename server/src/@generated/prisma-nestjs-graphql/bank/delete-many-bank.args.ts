import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBankArgs {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
