import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderVariationCountAggregate } from './order-variation-count-aggregate.output';
import { OrderVariationMinAggregate } from './order-variation-min-aggregate.output';
import { OrderVariationMaxAggregate } from './order-variation-max-aggregate.output';

@ObjectType()
export class AggregateOrderVariation {

    @Field(() => OrderVariationCountAggregate, {nullable:true})
    _count?: OrderVariationCountAggregate;

    @Field(() => OrderVariationMinAggregate, {nullable:true})
    _min?: OrderVariationMinAggregate;

    @Field(() => OrderVariationMaxAggregate, {nullable:true})
    _max?: OrderVariationMaxAggregate;
}
