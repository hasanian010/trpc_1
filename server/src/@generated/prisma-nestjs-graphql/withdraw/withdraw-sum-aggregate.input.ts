import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WithdrawSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
