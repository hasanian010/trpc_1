import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressCount {

    @Field(() => Int, {nullable:false})
    shippingOrders?: number;

    @Field(() => Int, {nullable:false})
    billingOrders?: number;
}
