import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableUpdateInput } from './refundable-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@ArgsType()
export class UpdateOneRefundableArgs {

    @Field(() => RefundableUpdateInput, {nullable:false})
    @Type(() => RefundableUpdateInput)
    data!: RefundableUpdateInput;

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;
}
