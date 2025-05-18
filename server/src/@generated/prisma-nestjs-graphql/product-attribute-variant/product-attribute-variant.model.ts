import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductAttribute } from '../product-attribute/product-attribute.model';

@ObjectType()
export class ProductAttributeVariant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    selected!: Array<string>;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:true})
    productAttributeId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => ProductAttribute, {nullable:true})
    productAttribute?: ProductAttribute | null;
}
