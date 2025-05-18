import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductCreateWithoutRefundablesInput } from './order-product-create-without-refundables.input';

@InputType()
export class OrderProductCreateOrConnectWithoutRefundablesInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutRefundablesInput)
    create!: OrderProductCreateWithoutRefundablesInput;
}
