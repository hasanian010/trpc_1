import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingCountAggregate } from './shipping-count-aggregate.output';
import { ShippingMinAggregate } from './shipping-min-aggregate.output';
import { ShippingMaxAggregate } from './shipping-max-aggregate.output';

@ObjectType()
export class AggregateShipping {

    @Field(() => ShippingCountAggregate, {nullable:true})
    _count?: ShippingCountAggregate;

    @Field(() => ShippingMinAggregate, {nullable:true})
    _min?: ShippingMinAggregate;

    @Field(() => ShippingMaxAggregate, {nullable:true})
    _max?: ShippingMaxAggregate;
}
