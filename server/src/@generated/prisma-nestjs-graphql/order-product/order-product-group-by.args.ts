import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { Type } from 'class-transformer';
import { OrderProductOrderByWithAggregationInput } from './order-product-order-by-with-aggregation.input';
import { OrderProductScalarFieldEnum } from './order-product-scalar-field.enum';
import { OrderProductScalarWhereWithAggregatesInput } from './order-product-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderProductCountAggregateInput } from './order-product-count-aggregate.input';
import { OrderProductAvgAggregateInput } from './order-product-avg-aggregate.input';
import { OrderProductSumAggregateInput } from './order-product-sum-aggregate.input';
import { OrderProductMinAggregateInput } from './order-product-min-aggregate.input';
import { OrderProductMaxAggregateInput } from './order-product-max-aggregate.input';

@ArgsType()
export class OrderProductGroupByArgs {

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => [OrderProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderProductOrderByWithAggregationInput>;

    @Field(() => [OrderProductScalarFieldEnum], {nullable:false})
    by!: Array<`${OrderProductScalarFieldEnum}`>;

    @Field(() => OrderProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderProductScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderProductCountAggregateInput, {nullable:true})
    _count?: OrderProductCountAggregateInput;

    @Field(() => OrderProductAvgAggregateInput, {nullable:true})
    _avg?: OrderProductAvgAggregateInput;

    @Field(() => OrderProductSumAggregateInput, {nullable:true})
    _sum?: OrderProductSumAggregateInput;

    @Field(() => OrderProductMinAggregateInput, {nullable:true})
    _min?: OrderProductMinAggregateInput;

    @Field(() => OrderProductMaxAggregateInput, {nullable:true})
    _max?: OrderProductMaxAggregateInput;
}
