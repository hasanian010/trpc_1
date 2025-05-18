import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductAttribute } from '../product-attribute/product-attribute.model';

@ObjectType()
export class ProductAttributeValues {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    variant!: string | null;

    @Field(() => String, {nullable:true})
    price!: string | null;

    @Field(() => String, {nullable:true})
    quantity!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

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
