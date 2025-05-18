import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderCount {

    @Field(() => Int, {nullable:false})
    sellers?: number;

    @Field(() => Int, {nullable:false})
    points?: number;

    @Field(() => Int, {nullable:false})
    refundables?: number;

    @Field(() => Int, {nullable:false})
    incomes?: number;
}
