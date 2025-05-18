import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Seller } from '../seller/seller.model';
import { OrderProduct } from '../order-product/order-product.model';
import { Order } from '../order/order.model';
import { OrderSellerCount } from './order-seller-count.output';

@ObjectType()
export class OrderSeller {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    cancelBy!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Seller, {nullable:false})
    seller?: Seller;

    @Field(() => [OrderProduct], {nullable:true})
    products?: Array<OrderProduct>;

    @Field(() => Order, {nullable:false})
    order?: Order;

    @Field(() => OrderSellerCount, {nullable:false})
    _count?: OrderSellerCount;
}
