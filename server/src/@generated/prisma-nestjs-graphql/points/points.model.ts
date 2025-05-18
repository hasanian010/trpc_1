import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Order } from '../order/order.model';
import { User } from '../user/user.model';

@ObjectType()
export class Points {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Order, {nullable:false})
    order?: Order;

    @Field(() => User, {nullable:false})
    user?: User;
}
