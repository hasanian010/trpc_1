import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderSellerSumAggregate {

    @Field(() => Float, {nullable:true})
    price?: number;
}
