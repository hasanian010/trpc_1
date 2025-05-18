import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationCreateWithoutRefundablesInput } from './order-variation-create-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateOrConnectWithoutRefundablesInput } from './order-variation-create-or-connect-without-refundables.input';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';

@InputType()
export class OrderVariationCreateNestedManyWithoutRefundablesInput {

    @Field(() => [OrderVariationCreateWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationCreateWithoutRefundablesInput)
    create?: Array<OrderVariationCreateWithoutRefundablesInput>;

    @Field(() => [OrderVariationCreateOrConnectWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: Array<OrderVariationCreateOrConnectWithoutRefundablesInput>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;
}
