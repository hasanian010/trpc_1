import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutOrderProductInput } from './refundable-update-without-order-product.input';
import { RefundableCreateWithoutOrderProductInput } from './refundable-create-without-order-product.input';

@InputType()
export class RefundableUpsertWithWhereUniqueWithoutOrderProductInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutOrderProductInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutOrderProductInput)
    update!: RefundableUpdateWithoutOrderProductInput;

    @Field(() => RefundableCreateWithoutOrderProductInput, {nullable:false})
    @Type(() => RefundableCreateWithoutOrderProductInput)
    create!: RefundableCreateWithoutOrderProductInput;
}
