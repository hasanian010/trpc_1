import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationWhereInput } from './order-variation-where.input';
import { Type } from 'class-transformer';
import { OrderVariationOrderByWithAggregationInput } from './order-variation-order-by-with-aggregation.input';
import { OrderVariationScalarFieldEnum } from './order-variation-scalar-field.enum';
import { OrderVariationScalarWhereWithAggregatesInput } from './order-variation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderVariationCountAggregateInput } from './order-variation-count-aggregate.input';
import { OrderVariationMinAggregateInput } from './order-variation-min-aggregate.input';
import { OrderVariationMaxAggregateInput } from './order-variation-max-aggregate.input';

@ArgsType()
export class OrderVariationGroupByArgs {

    @Field(() => OrderVariationWhereInput, {nullable:true})
    @Type(() => OrderVariationWhereInput)
    where?: OrderVariationWhereInput;

    @Field(() => [OrderVariationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderVariationOrderByWithAggregationInput>;

    @Field(() => [OrderVariationScalarFieldEnum], {nullable:false})
    by!: Array<`${OrderVariationScalarFieldEnum}`>;

    @Field(() => OrderVariationScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderVariationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderVariationCountAggregateInput, {nullable:true})
    _count?: OrderVariationCountAggregateInput;

    @Field(() => OrderVariationMinAggregateInput, {nullable:true})
    _min?: OrderVariationMinAggregateInput;

    @Field(() => OrderVariationMaxAggregateInput, {nullable:true})
    _max?: OrderVariationMaxAggregateInput;
}
