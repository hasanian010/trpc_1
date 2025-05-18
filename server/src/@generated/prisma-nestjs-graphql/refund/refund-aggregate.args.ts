import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';
import { Type } from 'class-transformer';
import { RefundOrderByWithRelationInput } from './refund-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefundCountAggregateInput } from './refund-count-aggregate.input';
import { RefundAvgAggregateInput } from './refund-avg-aggregate.input';
import { RefundSumAggregateInput } from './refund-sum-aggregate.input';
import { RefundMinAggregateInput } from './refund-min-aggregate.input';
import { RefundMaxAggregateInput } from './refund-max-aggregate.input';

@ArgsType()
export class RefundAggregateArgs {

    @Field(() => RefundWhereInput, {nullable:true})
    @Type(() => RefundWhereInput)
    where?: RefundWhereInput;

    @Field(() => [RefundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefundOrderByWithRelationInput>;

    @Field(() => RefundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RefundCountAggregateInput, {nullable:true})
    _count?: RefundCountAggregateInput;

    @Field(() => RefundAvgAggregateInput, {nullable:true})
    _avg?: RefundAvgAggregateInput;

    @Field(() => RefundSumAggregateInput, {nullable:true})
    _sum?: RefundSumAggregateInput;

    @Field(() => RefundMinAggregateInput, {nullable:true})
    _min?: RefundMinAggregateInput;

    @Field(() => RefundMaxAggregateInput, {nullable:true})
    _max?: RefundMaxAggregateInput;
}
