import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SectionsCountAggregate } from './sections-count-aggregate.output';
import { SectionsMinAggregate } from './sections-min-aggregate.output';
import { SectionsMaxAggregate } from './sections-max-aggregate.output';

@ObjectType()
export class AggregateSections {

    @Field(() => SectionsCountAggregate, {nullable:true})
    _count?: SectionsCountAggregate;

    @Field(() => SectionsMinAggregate, {nullable:true})
    _min?: SectionsMinAggregate;

    @Field(() => SectionsMaxAggregate, {nullable:true})
    _max?: SectionsMaxAggregate;
}
