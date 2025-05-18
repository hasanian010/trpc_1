import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Type } from 'class-transformer';
import { RefundCreateWithoutRefundableInput } from './refund-create-without-refundable.input';

@InputType()
export class RefundCreateOrConnectWithoutRefundableInput {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    @Type(() => RefundWhereUniqueInput)
    where!: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;

    @Field(() => RefundCreateWithoutRefundableInput, {nullable:false})
    @Type(() => RefundCreateWithoutRefundableInput)
    create!: RefundCreateWithoutRefundableInput;
}
