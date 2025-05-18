import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeWhereInput } from './income-where.input';
import { Type } from 'class-transformer';
import { IncomeOrderByWithAggregationInput } from './income-order-by-with-aggregation.input';
import { IncomeScalarFieldEnum } from './income-scalar-field.enum';
import { IncomeScalarWhereWithAggregatesInput } from './income-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { IncomeCountAggregateInput } from './income-count-aggregate.input';
import { IncomeAvgAggregateInput } from './income-avg-aggregate.input';
import { IncomeSumAggregateInput } from './income-sum-aggregate.input';
import { IncomeMinAggregateInput } from './income-min-aggregate.input';
import { IncomeMaxAggregateInput } from './income-max-aggregate.input';

@ArgsType()
export class IncomeGroupByArgs {

    @Field(() => IncomeWhereInput, {nullable:true})
    @Type(() => IncomeWhereInput)
    where?: IncomeWhereInput;

    @Field(() => [IncomeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<IncomeOrderByWithAggregationInput>;

    @Field(() => [IncomeScalarFieldEnum], {nullable:false})
    by!: Array<`${IncomeScalarFieldEnum}`>;

    @Field(() => IncomeScalarWhereWithAggregatesInput, {nullable:true})
    having?: IncomeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => IncomeCountAggregateInput, {nullable:true})
    _count?: IncomeCountAggregateInput;

    @Field(() => IncomeAvgAggregateInput, {nullable:true})
    _avg?: IncomeAvgAggregateInput;

    @Field(() => IncomeSumAggregateInput, {nullable:true})
    _sum?: IncomeSumAggregateInput;

    @Field(() => IncomeMinAggregateInput, {nullable:true})
    _min?: IncomeMinAggregateInput;

    @Field(() => IncomeMaxAggregateInput, {nullable:true})
    _max?: IncomeMaxAggregateInput;
}
