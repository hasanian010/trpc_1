import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductAttributeVariantCountAggregate } from './product-attribute-variant-count-aggregate.output';
import { ProductAttributeVariantMinAggregate } from './product-attribute-variant-min-aggregate.output';
import { ProductAttributeVariantMaxAggregate } from './product-attribute-variant-max-aggregate.output';

@ObjectType()
export class AggregateProductAttributeVariant {

    @Field(() => ProductAttributeVariantCountAggregate, {nullable:true})
    _count?: ProductAttributeVariantCountAggregate;

    @Field(() => ProductAttributeVariantMinAggregate, {nullable:true})
    _min?: ProductAttributeVariantMinAggregate;

    @Field(() => ProductAttributeVariantMaxAggregate, {nullable:true})
    _max?: ProductAttributeVariantMaxAggregate;
}
