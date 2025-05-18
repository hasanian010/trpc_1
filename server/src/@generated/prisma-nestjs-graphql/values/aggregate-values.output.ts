import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ValuesCountAggregate } from './values-count-aggregate.output';
import { ValuesMinAggregate } from './values-min-aggregate.output';
import { ValuesMaxAggregate } from './values-max-aggregate.output';

@ObjectType()
export class AggregateValues {

    @Field(() => ValuesCountAggregate, {nullable:true})
    _count?: ValuesCountAggregate;

    @Field(() => ValuesMinAggregate, {nullable:true})
    _min?: ValuesMinAggregate;

    @Field(() => ValuesMaxAggregate, {nullable:true})
    _max?: ValuesMaxAggregate;
}
