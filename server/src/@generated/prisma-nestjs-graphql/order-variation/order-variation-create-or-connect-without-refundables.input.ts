import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateWithoutRefundablesInput } from './order-variation-create-without-refundables.input';

@InputType()
export class OrderVariationCreateOrConnectWithoutRefundablesInput {

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

    @Field(() => OrderVariationCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderVariationCreateWithoutRefundablesInput)
    create!: OrderVariationCreateWithoutRefundablesInput;
}
