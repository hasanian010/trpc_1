import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneRefundArgs {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    @Type(() => RefundWhereUniqueInput)
    where!: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;
}
