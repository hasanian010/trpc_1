import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RefundCountAggregate } from './refund-count-aggregate.output';
import { RefundAvgAggregate } from './refund-avg-aggregate.output';
import { RefundSumAggregate } from './refund-sum-aggregate.output';
import { RefundMinAggregate } from './refund-min-aggregate.output';
import { RefundMaxAggregate } from './refund-max-aggregate.output';

@ObjectType()
export class RefundGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    refundableId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RefundCountAggregate, {nullable:true})
    _count?: RefundCountAggregate;

    @Field(() => RefundAvgAggregate, {nullable:true})
    _avg?: RefundAvgAggregate;

    @Field(() => RefundSumAggregate, {nullable:true})
    _sum?: RefundSumAggregate;

    @Field(() => RefundMinAggregate, {nullable:true})
    _min?: RefundMinAggregate;

    @Field(() => RefundMaxAggregate, {nullable:true})
    _max?: RefundMaxAggregate;
}
