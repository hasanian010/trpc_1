import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundUpdateInput } from './refund-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';

@ArgsType()
export class UpdateOneRefundArgs {

    @Field(() => RefundUpdateInput, {nullable:false})
    @Type(() => RefundUpdateInput)
    data!: RefundUpdateInput;

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    @Type(() => RefundWhereUniqueInput)
    where!: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;
}
