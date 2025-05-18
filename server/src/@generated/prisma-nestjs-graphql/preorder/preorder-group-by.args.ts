import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderWhereInput } from './preorder-where.input';
import { Type } from 'class-transformer';
import { PreorderOrderByWithAggregationInput } from './preorder-order-by-with-aggregation.input';
import { PreorderScalarFieldEnum } from './preorder-scalar-field.enum';
import { PreorderScalarWhereWithAggregatesInput } from './preorder-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PreorderCountAggregateInput } from './preorder-count-aggregate.input';
import { PreorderMinAggregateInput } from './preorder-min-aggregate.input';
import { PreorderMaxAggregateInput } from './preorder-max-aggregate.input';

@ArgsType()
export class PreorderGroupByArgs {

    @Field(() => PreorderWhereInput, {nullable:true})
    @Type(() => PreorderWhereInput)
    where?: PreorderWhereInput;

    @Field(() => [PreorderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PreorderOrderByWithAggregationInput>;

    @Field(() => [PreorderScalarFieldEnum], {nullable:false})
    by!: Array<`${PreorderScalarFieldEnum}`>;

    @Field(() => PreorderScalarWhereWithAggregatesInput, {nullable:true})
    having?: PreorderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PreorderCountAggregateInput, {nullable:true})
    _count?: PreorderCountAggregateInput;

    @Field(() => PreorderMinAggregateInput, {nullable:true})
    _min?: PreorderMinAggregateInput;

    @Field(() => PreorderMaxAggregateInput, {nullable:true})
    _max?: PreorderMaxAggregateInput;
}
