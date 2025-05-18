import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValuesWhereInput } from './values-where.input';
import { Type } from 'class-transformer';
import { ValuesOrderByWithAggregationInput } from './values-order-by-with-aggregation.input';
import { ValuesScalarFieldEnum } from './values-scalar-field.enum';
import { ValuesScalarWhereWithAggregatesInput } from './values-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ValuesCountAggregateInput } from './values-count-aggregate.input';
import { ValuesMinAggregateInput } from './values-min-aggregate.input';
import { ValuesMaxAggregateInput } from './values-max-aggregate.input';

@ArgsType()
export class ValuesGroupByArgs {

    @Field(() => ValuesWhereInput, {nullable:true})
    @Type(() => ValuesWhereInput)
    where?: ValuesWhereInput;

    @Field(() => [ValuesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ValuesOrderByWithAggregationInput>;

    @Field(() => [ValuesScalarFieldEnum], {nullable:false})
    by!: Array<`${ValuesScalarFieldEnum}`>;

    @Field(() => ValuesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ValuesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ValuesCountAggregateInput, {nullable:true})
    _count?: ValuesCountAggregateInput;

    @Field(() => ValuesMinAggregateInput, {nullable:true})
    _min?: ValuesMinAggregateInput;

    @Field(() => ValuesMaxAggregateInput, {nullable:true})
    _max?: ValuesMaxAggregateInput;
}
