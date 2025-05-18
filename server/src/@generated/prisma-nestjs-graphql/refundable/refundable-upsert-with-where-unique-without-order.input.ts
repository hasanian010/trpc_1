import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutOrderInput } from './refundable-update-without-order.input';
import { RefundableCreateWithoutOrderInput } from './refundable-create-without-order.input';

@InputType()
export class RefundableUpsertWithWhereUniqueWithoutOrderInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutOrderInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutOrderInput)
    update!: RefundableUpdateWithoutOrderInput;

    @Field(() => RefundableCreateWithoutOrderInput, {nullable:false})
    @Type(() => RefundableCreateWithoutOrderInput)
    create!: RefundableCreateWithoutOrderInput;
}
