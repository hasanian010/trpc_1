import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MetaCountAggregate } from './meta-count-aggregate.output';
import { MetaAvgAggregate } from './meta-avg-aggregate.output';
import { MetaSumAggregate } from './meta-sum-aggregate.output';
import { MetaMinAggregate } from './meta-min-aggregate.output';
import { MetaMaxAggregate } from './meta-max-aggregate.output';

@ObjectType()
export class AggregateMeta {

    @Field(() => MetaCountAggregate, {nullable:true})
    _count?: MetaCountAggregate;

    @Field(() => MetaAvgAggregate, {nullable:true})
    _avg?: MetaAvgAggregate;

    @Field(() => MetaSumAggregate, {nullable:true})
    _sum?: MetaSumAggregate;

    @Field(() => MetaMinAggregate, {nullable:true})
    _min?: MetaMinAggregate;

    @Field(() => MetaMaxAggregate, {nullable:true})
    _max?: MetaMaxAggregate;
}
