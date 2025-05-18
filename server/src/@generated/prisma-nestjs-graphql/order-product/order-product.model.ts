import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { OrderVariation } from '../order-variation/order-variation.model';
import { OrderSeller } from '../order-seller/order-seller.model';
import { Refundable } from '../refundable/refundable.model';
import { OrderProductCount } from './order-product-count.output';

@ObjectType()
export class OrderProduct {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    tax!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    orderSellerId!: string | null;

    @Field(() => [String], {nullable:true})
    refundableIds!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => [OrderVariation], {nullable:true})
    variations?: Array<OrderVariation>;

    @Field(() => OrderSeller, {nullable:true})
    orderSeller?: OrderSeller | null;

    @Field(() => [Refundable], {nullable:true})
    refundables?: Array<Refundable>;

    @Field(() => OrderProductCount, {nullable:false})
    _count?: OrderProductCount;
}
