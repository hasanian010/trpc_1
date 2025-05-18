import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RefundableSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    couponDiscount?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
