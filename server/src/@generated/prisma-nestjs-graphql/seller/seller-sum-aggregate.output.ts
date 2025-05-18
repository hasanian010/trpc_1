import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SellerSumAggregate {

    @Field(() => Float, {nullable:true})
    totalReview?: number;

    @Field(() => Float, {nullable:true})
    totalRating?: number;
}
