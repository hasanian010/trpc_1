import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderVariationCountAggregate } from './order-variation-count-aggregate.output';
import { OrderVariationMinAggregate } from './order-variation-min-aggregate.output';
import { OrderVariationMaxAggregate } from './order-variation-max-aggregate.output';

@ObjectType()
export class OrderVariationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    variant!: string;

    @Field(() => String, {nullable:false})
    orderProductId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrderVariationCountAggregate, {nullable:true})
    _count?: OrderVariationCountAggregate;

    @Field(() => OrderVariationMinAggregate, {nullable:true})
    _min?: OrderVariationMinAggregate;

    @Field(() => OrderVariationMaxAggregate, {nullable:true})
    _max?: OrderVariationMaxAggregate;
}
