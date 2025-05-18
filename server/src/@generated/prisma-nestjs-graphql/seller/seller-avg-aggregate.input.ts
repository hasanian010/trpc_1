import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SellerAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalReview?: true;

    @Field(() => Boolean, {nullable:true})
    totalRating?: true;
}
