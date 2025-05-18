import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Order } from '../order/order.model';

@ObjectType()
export class PaymentInfo {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    paymentMethod!: string | null;

    @Field(() => String, {nullable:true})
    paymentId!: string | null;

    @Field(() => String, {nullable:true})
    provider!: string | null;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Order, {nullable:false})
    order?: Order;
}
