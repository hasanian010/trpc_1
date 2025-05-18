import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPaymentInfoArgs {

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
