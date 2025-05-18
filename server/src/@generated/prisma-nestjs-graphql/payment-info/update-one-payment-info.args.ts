import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoUpdateInput } from './payment-info-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';

@ArgsType()
export class UpdateOnePaymentInfoArgs {

    @Field(() => PaymentInfoUpdateInput, {nullable:false})
    @Type(() => PaymentInfoUpdateInput)
    data!: PaymentInfoUpdateInput;

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:false})
    @Type(() => PaymentInfoWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;
}
