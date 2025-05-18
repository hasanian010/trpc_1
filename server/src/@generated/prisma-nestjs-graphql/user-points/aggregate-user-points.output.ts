import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserPointsCountAggregate } from './user-points-count-aggregate.output';
import { UserPointsAvgAggregate } from './user-points-avg-aggregate.output';
import { UserPointsSumAggregate } from './user-points-sum-aggregate.output';
import { UserPointsMinAggregate } from './user-points-min-aggregate.output';
import { UserPointsMaxAggregate } from './user-points-max-aggregate.output';

@ObjectType()
export class AggregateUserPoints {

    @Field(() => UserPointsCountAggregate, {nullable:true})
    _count?: UserPointsCountAggregate;

    @Field(() => UserPointsAvgAggregate, {nullable:true})
    _avg?: UserPointsAvgAggregate;

    @Field(() => UserPointsSumAggregate, {nullable:true})
    _sum?: UserPointsSumAggregate;

    @Field(() => UserPointsMinAggregate, {nullable:true})
    _min?: UserPointsMinAggregate;

    @Field(() => UserPointsMaxAggregate, {nullable:true})
    _max?: UserPointsMaxAggregate;
}
