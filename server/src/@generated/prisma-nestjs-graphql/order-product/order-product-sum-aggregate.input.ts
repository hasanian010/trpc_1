import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderProductSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    tax?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
