import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Order } from '../order/order.model';
import { AddressCount } from './address-count.output';

@ObjectType()
export class Address {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    area!: string;

    @Field(() => String, {nullable:false})
    postal!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Order], {nullable:true})
    shippingOrders?: Array<Order>;

    @Field(() => [Order], {nullable:true})
    billingOrders?: Array<Order>;

    @Field(() => AddressCount, {nullable:false})
    _count?: AddressCount;
}
