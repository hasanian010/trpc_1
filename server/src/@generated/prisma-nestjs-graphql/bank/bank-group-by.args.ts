import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';
import { BankOrderByWithAggregationInput } from './bank-order-by-with-aggregation.input';
import { BankScalarFieldEnum } from './bank-scalar-field.enum';
import { BankScalarWhereWithAggregatesInput } from './bank-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BankCountAggregateInput } from './bank-count-aggregate.input';
import { BankMinAggregateInput } from './bank-min-aggregate.input';
import { BankMaxAggregateInput } from './bank-max-aggregate.input';

@ArgsType()
export class BankGroupByArgs {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => [BankOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BankOrderByWithAggregationInput>;

    @Field(() => [BankScalarFieldEnum], {nullable:false})
    by!: Array<`${BankScalarFieldEnum}`>;

    @Field(() => BankScalarWhereWithAggregatesInput, {nullable:true})
    having?: BankScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BankCountAggregateInput, {nullable:true})
    _count?: BankCountAggregateInput;

    @Field(() => BankMinAggregateInput, {nullable:true})
    _min?: BankMinAggregateInput;

    @Field(() => BankMaxAggregateInput, {nullable:true})
    _max?: BankMaxAggregateInput;
}
