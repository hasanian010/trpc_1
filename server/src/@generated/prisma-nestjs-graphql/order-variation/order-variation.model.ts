import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { OrderProduct } from '../order-product/order-product.model';
import { Refundable } from '../refundable/refundable.model';
import { OrderVariationCount } from './order-variation-count.output';

@ObjectType()
export class OrderVariation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    variant!: string;

    @Field(() => String, {nullable:false})
    orderProductId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => OrderProduct, {nullable:false})
    orderProduct?: OrderProduct;

    @Field(() => [Refundable], {nullable:true})
    refundables?: Array<Refundable>;

    @Field(() => OrderVariationCount, {nullable:false})
    _count?: OrderVariationCount;
}
