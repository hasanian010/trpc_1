import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RefundSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}
