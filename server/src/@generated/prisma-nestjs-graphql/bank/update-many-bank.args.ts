import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankUpdateManyMutationInput } from './bank-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BankWhereInput } from './bank-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBankArgs {

    @Field(() => BankUpdateManyMutationInput, {nullable:false})
    @Type(() => BankUpdateManyMutationInput)
    data!: BankUpdateManyMutationInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
