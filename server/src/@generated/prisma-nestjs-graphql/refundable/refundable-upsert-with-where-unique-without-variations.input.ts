import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutVariationsInput } from './refundable-update-without-variations.input';
import { RefundableCreateWithoutVariationsInput } from './refundable-create-without-variations.input';

@InputType()
export class RefundableUpsertWithWhereUniqueWithoutVariationsInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutVariationsInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutVariationsInput)
    update!: RefundableUpdateWithoutVariationsInput;

    @Field(() => RefundableCreateWithoutVariationsInput, {nullable:false})
    @Type(() => RefundableCreateWithoutVariationsInput)
    create!: RefundableCreateWithoutVariationsInput;
}
