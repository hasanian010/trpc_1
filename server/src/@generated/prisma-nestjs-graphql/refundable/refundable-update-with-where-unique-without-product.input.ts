import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutProductInput } from './refundable-update-without-product.input';

@InputType()
export class RefundableUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutProductInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutProductInput)
    data!: RefundableUpdateWithoutProductInput;
}
