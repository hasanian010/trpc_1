import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutRefundablesInput } from './order-product-create-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutRefundablesInput } from './order-product-create-or-connect-without-refundables.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';

@InputType()
export class OrderProductCreateNestedOneWithoutRefundablesInput {

    @Field(() => OrderProductCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderProductCreateWithoutRefundablesInput)
    create?: OrderProductCreateWithoutRefundablesInput;

    @Field(() => OrderProductCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: OrderProductCreateOrConnectWithoutRefundablesInput;

    @Field(() => OrderProductWhereUniqueInput, {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;
}
