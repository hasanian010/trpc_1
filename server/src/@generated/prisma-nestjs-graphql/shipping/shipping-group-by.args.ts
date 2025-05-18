import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { Type } from 'class-transformer';
import { ShippingOrderByWithAggregationInput } from './shipping-order-by-with-aggregation.input';
import { ShippingScalarFieldEnum } from './shipping-scalar-field.enum';
import { ShippingScalarWhereWithAggregatesInput } from './shipping-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShippingCountAggregateInput } from './shipping-count-aggregate.input';
import { ShippingMinAggregateInput } from './shipping-min-aggregate.input';
import { ShippingMaxAggregateInput } from './shipping-max-aggregate.input';

@ArgsType()
export class ShippingGroupByArgs {

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;

    @Field(() => [ShippingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShippingOrderByWithAggregationInput>;

    @Field(() => [ShippingScalarFieldEnum], {nullable:false})
    by!: Array<`${ShippingScalarFieldEnum}`>;

    @Field(() => ShippingScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShippingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShippingCountAggregateInput, {nullable:true})
    _count?: ShippingCountAggregateInput;

    @Field(() => ShippingMinAggregateInput, {nullable:true})
    _min?: ShippingMinAggregateInput;

    @Field(() => ShippingMaxAggregateInput, {nullable:true})
    _max?: ShippingMaxAggregateInput;
}
