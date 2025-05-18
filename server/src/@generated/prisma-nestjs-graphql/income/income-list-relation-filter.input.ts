import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeWhereInput } from './income-where.input';

@InputType()
export class IncomeListRelationFilter {

    @Field(() => IncomeWhereInput, {nullable:true})
    every?: IncomeWhereInput;

    @Field(() => IncomeWhereInput, {nullable:true})
    some?: IncomeWhereInput;

    @Field(() => IncomeWhereInput, {nullable:true})
    none?: IncomeWhereInput;
}
