import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PreorderCountAggregate } from './preorder-count-aggregate.output';
import { PreorderMinAggregate } from './preorder-min-aggregate.output';
import { PreorderMaxAggregate } from './preorder-max-aggregate.output';

@ObjectType()
export class AggregatePreorder {

    @Field(() => PreorderCountAggregate, {nullable:true})
    _count?: PreorderCountAggregate;

    @Field(() => PreorderMinAggregate, {nullable:true})
    _min?: PreorderMinAggregate;

    @Field(() => PreorderMaxAggregate, {nullable:true})
    _max?: PreorderMaxAggregate;
}
