import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Attribute } from '../attribute/attribute.model';
import { ProductAttributeVariant } from '../product-attribute-variant/product-attribute-variant.model';
import { ProductAttributeValues } from '../product-attribute-values/product-attribute-values.model';
import { Product } from '../product/product.model';
import { ProductAttributeCount } from './product-attribute-count.output';

@ObjectType()
export class ProductAttribute {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Attribute], {nullable:true})
    attributes?: Array<Attribute>;

    @Field(() => [ProductAttributeVariant], {nullable:true})
    selectedVariants?: Array<ProductAttributeVariant>;

    @Field(() => [ProductAttributeValues], {nullable:true})
    attributeValues?: Array<ProductAttributeValues>;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => ProductAttributeCount, {nullable:false})
    _count?: ProductAttributeCount;
}
