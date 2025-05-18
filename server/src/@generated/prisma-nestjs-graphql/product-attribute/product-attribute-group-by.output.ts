import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductAttributeCountAggregate } from './product-attribute-count-aggregate.output';
import { ProductAttributeMinAggregate } from './product-attribute-min-aggregate.output';
import { ProductAttributeMaxAggregate } from './product-attribute-max-aggregate.output';

@ObjectType()
export class ProductAttributeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductAttributeCountAggregate, {nullable:true})
    _count?: ProductAttributeCountAggregate;

    @Field(() => ProductAttributeMinAggregate, {nullable:true})
    _min?: ProductAttributeMinAggregate;

    @Field(() => ProductAttributeMaxAggregate, {nullable:true})
    _max?: ProductAttributeMaxAggregate;
}
