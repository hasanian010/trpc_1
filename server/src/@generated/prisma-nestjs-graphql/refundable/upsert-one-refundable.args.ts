import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableCreateInput } from './refundable-create.input';
import { RefundableUpdateInput } from './refundable-update.input';

@ArgsType()
export class UpsertOneRefundableArgs {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableCreateInput, {nullable:false})
    @Type(() => RefundableCreateInput)
    create!: RefundableCreateInput;

    @Field(() => RefundableUpdateInput, {nullable:false})
    @Type(() => RefundableUpdateInput)
    update!: RefundableUpdateInput;
}
