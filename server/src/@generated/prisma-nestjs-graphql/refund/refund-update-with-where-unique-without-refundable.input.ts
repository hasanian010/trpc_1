import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Type } from 'class-transformer';
import { RefundUpdateWithoutRefundableInput } from './refund-update-without-refundable.input';

@InputType()
export class RefundUpdateWithWhereUniqueWithoutRefundableInput {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    @Type(() => RefundWhereUniqueInput)
    where!: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;

    @Field(() => RefundUpdateWithoutRefundableInput, {nullable:false})
    @Type(() => RefundUpdateWithoutRefundableInput)
    data!: RefundUpdateWithoutRefundableInput;
}
