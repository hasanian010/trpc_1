import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductMetaCountAggregate } from './product-meta-count-aggregate.output';
import { ProductMetaMinAggregate } from './product-meta-min-aggregate.output';
import { ProductMetaMaxAggregate } from './product-meta-max-aggregate.output';

@ObjectType()
export class AggregateProductMeta {

    @Field(() => ProductMetaCountAggregate, {nullable:true})
    _count?: ProductMetaCountAggregate;

    @Field(() => ProductMetaMinAggregate, {nullable:true})
    _min?: ProductMetaMinAggregate;

    @Field(() => ProductMetaMaxAggregate, {nullable:true})
    _max?: ProductMetaMaxAggregate;
}
