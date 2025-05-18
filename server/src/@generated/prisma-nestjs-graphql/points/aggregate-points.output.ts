import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PointsCountAggregate } from './points-count-aggregate.output';
import { PointsAvgAggregate } from './points-avg-aggregate.output';
import { PointsSumAggregate } from './points-sum-aggregate.output';
import { PointsMinAggregate } from './points-min-aggregate.output';
import { PointsMaxAggregate } from './points-max-aggregate.output';

@ObjectType()
export class AggregatePoints {

    @Field(() => PointsCountAggregate, {nullable:true})
    _count?: PointsCountAggregate;

    @Field(() => PointsAvgAggregate, {nullable:true})
    _avg?: PointsAvgAggregate;

    @Field(() => PointsSumAggregate, {nullable:true})
    _sum?: PointsSumAggregate;

    @Field(() => PointsMinAggregate, {nullable:true})
    _min?: PointsMinAggregate;

    @Field(() => PointsMaxAggregate, {nullable:true})
    _max?: PointsMaxAggregate;
}
