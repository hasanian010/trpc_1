import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AttributeCountAggregate } from './attribute-count-aggregate.output';
import { AttributeMinAggregate } from './attribute-min-aggregate.output';
import { AttributeMaxAggregate } from './attribute-max-aggregate.output';

@ObjectType()
export class AggregateAttribute {

    @Field(() => AttributeCountAggregate, {nullable:true})
    _count?: AttributeCountAggregate;

    @Field(() => AttributeMinAggregate, {nullable:true})
    _min?: AttributeMinAggregate;

    @Field(() => AttributeMaxAggregate, {nullable:true})
    _max?: AttributeMaxAggregate;
}
