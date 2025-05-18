import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderVariationCount {

    @Field(() => Int, {nullable:false})
    refundables?: number;
}
