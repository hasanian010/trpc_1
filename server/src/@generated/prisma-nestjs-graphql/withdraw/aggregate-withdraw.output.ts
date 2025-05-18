import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WithdrawCountAggregate } from './withdraw-count-aggregate.output';
import { WithdrawAvgAggregate } from './withdraw-avg-aggregate.output';
import { WithdrawSumAggregate } from './withdraw-sum-aggregate.output';
import { WithdrawMinAggregate } from './withdraw-min-aggregate.output';
import { WithdrawMaxAggregate } from './withdraw-max-aggregate.output';

@ObjectType()
export class AggregateWithdraw {

    @Field(() => WithdrawCountAggregate, {nullable:true})
    _count?: WithdrawCountAggregate;

    @Field(() => WithdrawAvgAggregate, {nullable:true})
    _avg?: WithdrawAvgAggregate;

    @Field(() => WithdrawSumAggregate, {nullable:true})
    _sum?: WithdrawSumAggregate;

    @Field(() => WithdrawMinAggregate, {nullable:true})
    _min?: WithdrawMinAggregate;

    @Field(() => WithdrawMaxAggregate, {nullable:true})
    _max?: WithdrawMaxAggregate;
}
