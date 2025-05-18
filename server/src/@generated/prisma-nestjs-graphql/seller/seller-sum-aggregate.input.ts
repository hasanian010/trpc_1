import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SellerSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalReview?: true;

    @Field(() => Boolean, {nullable:true})
    totalRating?: true;
}
