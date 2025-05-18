import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductSpecificationCountAggregate } from './product-specification-count-aggregate.output';
import { ProductSpecificationMinAggregate } from './product-specification-min-aggregate.output';
import { ProductSpecificationMaxAggregate } from './product-specification-max-aggregate.output';

@ObjectType()
export class ProductSpecificationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductSpecificationCountAggregate, {nullable:true})
    _count?: ProductSpecificationCountAggregate;

    @Field(() => ProductSpecificationMinAggregate, {nullable:true})
    _min?: ProductSpecificationMinAggregate;

    @Field(() => ProductSpecificationMaxAggregate, {nullable:true})
    _max?: ProductSpecificationMaxAggregate;
}
