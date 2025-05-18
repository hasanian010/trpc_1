import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Type } from 'class-transformer';
import { RefundCreateInput } from './refund-create.input';
import { RefundUpdateInput } from './refund-update.input';

@ArgsType()
export class UpsertOneRefundArgs {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    @Type(() => RefundWhereUniqueInput)
    where!: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;

    @Field(() => RefundCreateInput, {nullable:false})
    @Type(() => RefundCreateInput)
    create!: RefundCreateInput;

    @Field(() => RefundUpdateInput, {nullable:false})
    @Type(() => RefundUpdateInput)
    update!: RefundUpdateInput;
}
