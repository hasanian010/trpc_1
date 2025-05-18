import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderProductCount {

    @Field(() => Int, {nullable:false})
    variations?: number;

    @Field(() => Int, {nullable:false})
    refundables?: number;
}
