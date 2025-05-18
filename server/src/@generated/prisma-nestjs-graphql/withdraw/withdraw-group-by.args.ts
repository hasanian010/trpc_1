import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawWhereInput } from './withdraw-where.input';
import { Type } from 'class-transformer';
import { WithdrawOrderByWithAggregationInput } from './withdraw-order-by-with-aggregation.input';
import { WithdrawScalarFieldEnum } from './withdraw-scalar-field.enum';
import { WithdrawScalarWhereWithAggregatesInput } from './withdraw-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WithdrawCountAggregateInput } from './withdraw-count-aggregate.input';
import { WithdrawAvgAggregateInput } from './withdraw-avg-aggregate.input';
import { WithdrawSumAggregateInput } from './withdraw-sum-aggregate.input';
import { WithdrawMinAggregateInput } from './withdraw-min-aggregate.input';
import { WithdrawMaxAggregateInput } from './withdraw-max-aggregate.input';

@ArgsType()
export class WithdrawGroupByArgs {

    @Field(() => WithdrawWhereInput, {nullable:true})
    @Type(() => WithdrawWhereInput)
    where?: WithdrawWhereInput;

    @Field(() => [WithdrawOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WithdrawOrderByWithAggregationInput>;

    @Field(() => [WithdrawScalarFieldEnum], {nullable:false})
    by!: Array<`${WithdrawScalarFieldEnum}`>;

    @Field(() => WithdrawScalarWhereWithAggregatesInput, {nullable:true})
    having?: WithdrawScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WithdrawCountAggregateInput, {nullable:true})
    _count?: WithdrawCountAggregateInput;

    @Field(() => WithdrawAvgAggregateInput, {nullable:true})
    _avg?: WithdrawAvgAggregateInput;

    @Field(() => WithdrawSumAggregateInput, {nullable:true})
    _sum?: WithdrawSumAggregateInput;

    @Field(() => WithdrawMinAggregateInput, {nullable:true})
    _min?: WithdrawMinAggregateInput;

    @Field(() => WithdrawMaxAggregateInput, {nullable:true})
    _max?: WithdrawMaxAggregateInput;
}
