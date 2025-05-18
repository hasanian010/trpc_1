import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentInfoCreateInput } from './payment-info-create.input';
import { PaymentInfoUpdateInput } from './payment-info-update.input';

@ArgsType()
export class UpsertOnePaymentInfoArgs {

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:false})
    @Type(() => PaymentInfoWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => PaymentInfoCreateInput, {nullable:false})
    @Type(() => PaymentInfoCreateInput)
    create!: PaymentInfoCreateInput;

    @Field(() => PaymentInfoUpdateInput, {nullable:false})
    @Type(() => PaymentInfoUpdateInput)
    update!: PaymentInfoUpdateInput;
}
