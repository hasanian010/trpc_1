import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { Type } from 'class-transformer';
import { OrderProductOrderByWithRelationInput } from './order-product-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderProductCountAggregateInput } from './order-product-count-aggregate.input';
import { OrderProductAvgAggregateInput } from './order-product-avg-aggregate.input';
import { OrderProductSumAggregateInput } from './order-product-sum-aggregate.input';
import { OrderProductMinAggregateInput } from './order-product-min-aggregate.input';
import { OrderProductMaxAggregateInput } from './order-product-max-aggregate.input';

@ArgsType()
export class OrderProductAggregateArgs {

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => [OrderProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderProductOrderByWithRelationInput>;

    @Field(() => OrderProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

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
