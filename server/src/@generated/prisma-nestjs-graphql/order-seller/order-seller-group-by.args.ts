import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { Type } from 'class-transformer';
import { OrderSellerOrderByWithAggregationInput } from './order-seller-order-by-with-aggregation.input';
import { OrderSellerScalarFieldEnum } from './order-seller-scalar-field.enum';
import { OrderSellerScalarWhereWithAggregatesInput } from './order-seller-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderSellerCountAggregateInput } from './order-seller-count-aggregate.input';
import { OrderSellerAvgAggregateInput } from './order-seller-avg-aggregate.input';
import { OrderSellerSumAggregateInput } from './order-seller-sum-aggregate.input';
import { OrderSellerMinAggregateInput } from './order-seller-min-aggregate.input';
import { OrderSellerMaxAggregateInput } from './order-seller-max-aggregate.input';

@ArgsType()
export class OrderSellerGroupByArgs {

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    where?: OrderSellerWhereInput;

    @Field(() => [OrderSellerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderSellerOrderByWithAggregationInput>;

    @Field(() => [OrderSellerScalarFieldEnum], {nullable:false})
    by!: Array<`${OrderSellerScalarFieldEnum}`>;

    @Field(() => OrderSellerScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderSellerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderSellerCountAggregateInput, {nullable:true})
    _count?: OrderSellerCountAggregateInput;

    @Field(() => OrderSellerAvgAggregateInput, {nullable:true})
    _avg?: OrderSellerAvgAggregateInput;

    @Field(() => OrderSellerSumAggregateInput, {nullable:true})
    _sum?: OrderSellerSumAggregateInput;

    @Field(() => OrderSellerMinAggregateInput, {nullable:true})
    _min?: OrderSellerMinAggregateInput;

    @Field(() => OrderSellerMaxAggregateInput, {nullable:true})
    _max?: OrderSellerMaxAggregateInput;
}
