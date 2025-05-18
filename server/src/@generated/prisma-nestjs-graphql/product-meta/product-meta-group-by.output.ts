import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductMetaCountAggregate } from './product-meta-count-aggregate.output';
import { ProductMetaMinAggregate } from './product-meta-min-aggregate.output';
import { ProductMetaMaxAggregate } from './product-meta-max-aggregate.output';

@ObjectType()
export class ProductMetaGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => [String], {nullable:true})
    metaTags?: Array<string>;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductMetaCountAggregate, {nullable:true})
    _count?: ProductMetaCountAggregate;

    @Field(() => ProductMetaMinAggregate, {nullable:true})
    _min?: ProductMetaMinAggregate;

    @Field(() => ProductMetaMaxAggregate, {nullable:true})
    _max?: ProductMetaMaxAggregate;
}
