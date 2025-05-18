import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductAttributeValuesCountAggregate } from './product-attribute-values-count-aggregate.output';
import { ProductAttributeValuesMinAggregate } from './product-attribute-values-min-aggregate.output';
import { ProductAttributeValuesMaxAggregate } from './product-attribute-values-max-aggregate.output';

@ObjectType()
export class AggregateProductAttributeValues {

    @Field(() => ProductAttributeValuesCountAggregate, {nullable:true})
    _count?: ProductAttributeValuesCountAggregate;

    @Field(() => ProductAttributeValuesMinAggregate, {nullable:true})
    _min?: ProductAttributeValuesMinAggregate;

    @Field(() => ProductAttributeValuesMaxAggregate, {nullable:true})
    _max?: ProductAttributeValuesMaxAggregate;
}
