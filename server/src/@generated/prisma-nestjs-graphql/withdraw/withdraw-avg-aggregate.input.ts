import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WithdrawAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
