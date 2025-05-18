import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';
import { Type } from 'class-transformer';
import { RefundableOrderByWithAggregationInput } from './refundable-order-by-with-aggregation.input';
import { RefundableScalarFieldEnum } from './refundable-scalar-field.enum';
import { RefundableScalarWhereWithAggregatesInput } from './refundable-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RefundableCountAggregateInput } from './refundable-count-aggregate.input';
import { RefundableAvgAggregateInput } from './refundable-avg-aggregate.input';
import { RefundableSumAggregateInput } from './refundable-sum-aggregate.input';
import { RefundableMinAggregateInput } from './refundable-min-aggregate.input';
import { RefundableMaxAggregateInput } from './refundable-max-aggregate.input';

@ArgsType()
export class RefundableGroupByArgs {

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;

    @Field(() => [RefundableOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RefundableOrderByWithAggregationInput>;

    @Field(() => [RefundableScalarFieldEnum], {nullable:false})
    by!: Array<`${RefundableScalarFieldEnum}`>;

    @Field(() => RefundableScalarWhereWithAggregatesInput, {nullable:true})
    having?: RefundableScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RefundableCountAggregateInput, {nullable:true})
    _count?: RefundableCountAggregateInput;

    @Field(() => RefundableAvgAggregateInput, {nullable:true})
    _avg?: RefundableAvgAggregateInput;

    @Field(() => RefundableSumAggregateInput, {nullable:true})
    _sum?: RefundableSumAggregateInput;

    @Field(() => RefundableMinAggregateInput, {nullable:true})
    _min?: RefundableMinAggregateInput;

    @Field(() => RefundableMaxAggregateInput, {nullable:true})
    _max?: RefundableMaxAggregateInput;
}
