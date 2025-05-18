import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class IncomeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    income?: true;
}
