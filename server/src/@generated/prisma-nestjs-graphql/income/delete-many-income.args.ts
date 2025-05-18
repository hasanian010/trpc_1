import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeWhereInput } from './income-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyIncomeArgs {

    @Field(() => IncomeWhereInput, {nullable:true})
    @Type(() => IncomeWhereInput)
    where?: IncomeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
