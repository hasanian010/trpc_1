import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ValuesCountAggregate } from './values-count-aggregate.output';
import { ValuesMinAggregate } from './values-min-aggregate.output';
import { ValuesMaxAggregate } from './values-max-aggregate.output';

@ObjectType()
export class ValuesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => String, {nullable:true})
    meta?: string;

    @Field(() => String, {nullable:false})
    attributeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ValuesCountAggregate, {nullable:true})
    _count?: ValuesCountAggregate;

    @Field(() => ValuesMinAggregate, {nullable:true})
    _min?: ValuesMinAggregate;

    @Field(() => ValuesMaxAggregate, {nullable:true})
    _max?: ValuesMaxAggregate;
}
