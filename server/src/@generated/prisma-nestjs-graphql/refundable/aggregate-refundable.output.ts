import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RefundableCountAggregate } from './refundable-count-aggregate.output';
import { RefundableAvgAggregate } from './refundable-avg-aggregate.output';
import { RefundableSumAggregate } from './refundable-sum-aggregate.output';
import { RefundableMinAggregate } from './refundable-min-aggregate.output';
import { RefundableMaxAggregate } from './refundable-max-aggregate.output';

@ObjectType()
export class AggregateRefundable {

    @Field(() => RefundableCountAggregate, {nullable:true})
    _count?: RefundableCountAggregate;

    @Field(() => RefundableAvgAggregate, {nullable:true})
    _avg?: RefundableAvgAggregate;

    @Field(() => RefundableSumAggregate, {nullable:true})
    _sum?: RefundableSumAggregate;

    @Field(() => RefundableMinAggregate, {nullable:true})
    _min?: RefundableMinAggregate;

    @Field(() => RefundableMaxAggregate, {nullable:true})
    _max?: RefundableMaxAggregate;
}
