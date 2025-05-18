import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SectionProductCountAggregate } from './section-product-count-aggregate.output';
import { SectionProductMinAggregate } from './section-product-min-aggregate.output';
import { SectionProductMaxAggregate } from './section-product-max-aggregate.output';

@ObjectType()
export class AggregateSectionProduct {

    @Field(() => SectionProductCountAggregate, {nullable:true})
    _count?: SectionProductCountAggregate;

    @Field(() => SectionProductMinAggregate, {nullable:true})
    _min?: SectionProductMinAggregate;

    @Field(() => SectionProductMaxAggregate, {nullable:true})
    _max?: SectionProductMaxAggregate;
}
