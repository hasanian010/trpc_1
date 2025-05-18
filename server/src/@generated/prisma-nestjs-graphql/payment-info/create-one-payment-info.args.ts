import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoCreateInput } from './payment-info-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePaymentInfoArgs {

    @Field(() => PaymentInfoCreateInput, {nullable:false})
    @Type(() => PaymentInfoCreateInput)
    data!: PaymentInfoCreateInput;
}
