import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingCountAggregate } from './shipping-count-aggregate.output';
import { ShippingMinAggregate } from './shipping-min-aggregate.output';
import { ShippingMaxAggregate } from './shipping-max-aggregate.output';

@ObjectType()
export class ShippingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    rateInsideDhaka!: string;

    @Field(() => String, {nullable:false})
    rateOutsideDhaka!: string;

    @Field(() => String, {nullable:false})
    rateInSavar!: string;

    @Field(() => String, {nullable:false})
    estimateDelivery!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ShippingCountAggregate, {nullable:true})
    _count?: ShippingCountAggregate;

    @Field(() => ShippingMinAggregate, {nullable:true})
    _min?: ShippingMinAggregate;

    @Field(() => ShippingMaxAggregate, {nullable:true})
    _max?: ShippingMaxAggregate;
}
