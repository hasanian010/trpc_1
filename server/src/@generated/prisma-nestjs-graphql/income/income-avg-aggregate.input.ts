import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class IncomeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    income?: true;
}
