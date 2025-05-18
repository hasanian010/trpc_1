import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Seller } from '../seller/seller.model';
import { Order } from '../order/order.model';

@ObjectType()
export class Income {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:true})
    income!: number | null;

    @Field(() => Boolean, {defaultValue:false,nullable:true})
    paySuccess!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Seller, {nullable:false})
    seller?: Seller;

    @Field(() => Order, {nullable:false})
    order?: Order;
}
