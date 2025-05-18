import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SellerCount {

    @Field(() => Int, {nullable:false})
    products?: number;

    @Field(() => Int, {nullable:false})
    orderSellers?: number;

    @Field(() => Int, {nullable:false})
    refundables?: number;

    @Field(() => Int, {nullable:false})
    withdraws?: number;

    @Field(() => Int, {nullable:false})
    incomes?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;
}
