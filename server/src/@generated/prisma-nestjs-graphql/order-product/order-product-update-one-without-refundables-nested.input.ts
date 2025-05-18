import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutRefundablesInput } from './order-product-create-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutRefundablesInput } from './order-product-create-or-connect-without-refundables.input';
import { OrderProductUpsertWithoutRefundablesInput } from './order-product-upsert-without-refundables.input';
import { OrderProductWhereInput } from './order-product-where.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { OrderProductUpdateToOneWithWhereWithoutRefundablesInput } from './order-product-update-to-one-with-where-without-refundables.input';

@InputType()
export class OrderProductUpdateOneWithoutRefundablesNestedInput {

    @Field(() => OrderProductCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderProductCreateWithoutRefundablesInput)
    create?: OrderProductCreateWithoutRefundablesInput;

    @Field(() => OrderProductCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: OrderProductCreateOrConnectWithoutRefundablesInput;

    @Field(() => OrderProductUpsertWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderProductUpsertWithoutRefundablesInput)
    upsert?: OrderProductUpsertWithoutRefundablesInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    disconnect?: OrderProductWhereInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    delete?: OrderProductWhereInput;

    @Field(() => OrderProductWhereUniqueInput, {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductUpdateToOneWithWhereWithoutRefundablesInput, {nullable:true})
    @Type(() => OrderProductUpdateToOneWithWhereWithoutRefundablesInput)
    update?: OrderProductUpdateToOneWithWhereWithoutRefundablesInput;
}
