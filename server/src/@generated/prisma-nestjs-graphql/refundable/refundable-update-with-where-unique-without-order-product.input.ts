import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutOrderProductInput } from './refundable-update-without-order-product.input';

@InputType()
export class RefundableUpdateWithWhereUniqueWithoutOrderProductInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutOrderProductInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutOrderProductInput)
    data!: RefundableUpdateWithoutOrderProductInput;
}
