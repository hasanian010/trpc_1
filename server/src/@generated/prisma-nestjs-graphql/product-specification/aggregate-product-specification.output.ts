import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductSpecificationCountAggregate } from './product-specification-count-aggregate.output';
import { ProductSpecificationMinAggregate } from './product-specification-min-aggregate.output';
import { ProductSpecificationMaxAggregate } from './product-specification-max-aggregate.output';

@ObjectType()
export class AggregateProductSpecification {

    @Field(() => ProductSpecificationCountAggregate, {nullable:true})
    _count?: ProductSpecificationCountAggregate;

    @Field(() => ProductSpecificationMinAggregate, {nullable:true})
    _min?: ProductSpecificationMinAggregate;

    @Field(() => ProductSpecificationMaxAggregate, {nullable:true})
    _max?: ProductSpecificationMaxAggregate;
}
