import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationWhereInput } from './order-variation-where.input';
import { Type } from 'class-transformer';
import { OrderVariationOrderByWithRelationInput } from './order-variation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderVariationCountAggregateInput } from './order-variation-count-aggregate.input';
import { OrderVariationMinAggregateInput } from './order-variation-min-aggregate.input';
import { OrderVariationMaxAggregateInput } from './order-variation-max-aggregate.input';

@ArgsType()
export class OrderVariationAggregateArgs {

    @Field(() => OrderVariationWhereInput, {nullable:true})
    @Type(() => OrderVariationWhereInput)
    where?: OrderVariationWhereInput;

    @Field(() => [OrderVariationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderVariationOrderByWithRelationInput>;

    @Field(() => OrderVariationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

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
