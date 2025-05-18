import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';

@InputType()
export class PaymentInfoNullableScalarRelationFilter {

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    is?: PaymentInfoWhereInput;

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    isNot?: PaymentInfoWhereInput;
}
