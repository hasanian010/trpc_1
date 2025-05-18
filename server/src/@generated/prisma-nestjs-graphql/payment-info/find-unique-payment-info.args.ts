import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePaymentInfoArgs {

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:false})
    @Type(() => PaymentInfoWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;
}
