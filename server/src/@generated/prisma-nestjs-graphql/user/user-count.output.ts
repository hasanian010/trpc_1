import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    providers?: number;

    @Field(() => Int, {nullable:false})
    addresses?: number;

    @Field(() => Int, {nullable:false})
    sellers?: number;

    @Field(() => Int, {nullable:false})
    orders?: number;

    @Field(() => Int, {nullable:false})
    points?: number;

    @Field(() => Int, {nullable:false})
    refunds?: number;

    @Field(() => Int, {nullable:false})
    refundables?: number;

    @Field(() => Int, {nullable:false})
    releasedWithdraws?: number;

    @Field(() => Int, {nullable:false})
    wishlists?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;
}
