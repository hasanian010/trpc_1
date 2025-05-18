import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderSeller } from '../order-seller/order-seller.model';
import { PaymentInfo } from '../payment-info/payment-info.model';
import { Address } from '../address/address.model';
import { User } from '../user/user.model';
import { Points } from '../points/points.model';
import { Refundable } from '../refundable/refundable.model';
import { Income } from '../income/income.model';
import { OrderCount } from './order-count.output';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {defaultValue:0,nullable:false})
    couponDiscount!: number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => Float, {nullable:false})
    subtotal!: number;

    @Field(() => Float, {nullable:false})
    shippingFees!: number;

    @Field(() => Float, {nullable:false})
    shippingCount!: number;

    @Field(() => String, {nullable:false})
    estimateDelivery!: string;

    @Field(() => String, {nullable:true})
    shippingAddressId!: string | null;

    @Field(() => String, {nullable:true})
    billingAddressId!: string | null;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    paymentStatus!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [OrderSeller], {nullable:true})
    sellers?: Array<OrderSeller>;

    @Field(() => PaymentInfo, {nullable:true})
    payment?: PaymentInfo | null;

    @Field(() => Address, {nullable:true})
    shippingAddress?: Address | null;

    @Field(() => Address, {nullable:true})
    billingAddress?: Address | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Points], {nullable:true})
    points?: Array<Points>;

    @Field(() => [Refundable], {nullable:true})
    refundables?: Array<Refundable>;

    @Field(() => [Income], {nullable:true})
    incomes?: Array<Income>;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}
