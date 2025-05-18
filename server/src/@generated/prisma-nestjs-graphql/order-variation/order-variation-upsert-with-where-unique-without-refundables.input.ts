import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Type } from 'class-transformer';
import { OrderVariationUpdateWithoutRefundablesInput } from './order-variation-update-without-refundables.input';
import { OrderVariationCreateWithoutRefundablesInput } from './order-variation-create-without-refundables.input';

@InputType()
export class OrderVariationUpsertWithWhereUniqueWithoutRefundablesInput {

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

    @Field(() => OrderVariationUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderVariationUpdateWithoutRefundablesInput)
    update!: OrderVariationUpdateWithoutRefundablesInput;

    @Field(() => OrderVariationCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderVariationCreateWithoutRefundablesInput)
    create!: OrderVariationCreateWithoutRefundablesInput;
}
