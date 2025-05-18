import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Product } from '../product/product.model';
import { OrderProduct } from '../order-product/order-product.model';
import { Order } from '../order/order.model';
import { OrderVariation } from '../order-variation/order-variation.model';
import { Seller } from '../seller/seller.model';
import { Refund } from '../refund/refund.model';
import { RefundableCount } from './refundable-count.output';

@ObjectType()
export class Refundable {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:true})
    productId!: string | null;

    @Field(() => String, {nullable:true})
    orderProductId!: string | null;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => Float, {nullable:true})
    quantity!: number | null;

    @Field(() => String, {nullable:true})
    sellerId!: string | null;

    @Field(() => Float, {defaultValue:0,nullable:true})
    couponDiscount!: number | null;

    @Field(() => Float, {nullable:true})
    amount!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Product, {nullable:true})
    product?: Product | null;

    @Field(() => OrderProduct, {nullable:true})
    orderProduct?: OrderProduct | null;

    @Field(() => Order, {nullable:true})
    order?: Order | null;

    @Field(() => [OrderVariation], {nullable:true})
    variations?: Array<OrderVariation>;

    @Field(() => Seller, {nullable:true})
    seller?: Seller | null;

    @Field(() => [Refund], {nullable:true})
    refunds?: Array<Refund>;

    @Field(() => RefundableCount, {nullable:false})
    _count?: RefundableCount;
}
