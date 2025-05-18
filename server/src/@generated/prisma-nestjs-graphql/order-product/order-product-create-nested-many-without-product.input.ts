import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutProductInput } from './order-product-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutProductInput } from './order-product-create-or-connect-without-product.input';
import { OrderProductCreateManyProductInputEnvelope } from './order-product-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';

@InputType()
export class OrderProductCreateNestedManyWithoutProductInput {

    @Field(() => [OrderProductCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderProductCreateWithoutProductInput)
    create?: Array<OrderProductCreateWithoutProductInput>;

    @Field(() => [OrderProductCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderProductCreateOrConnectWithoutProductInput>;

    @Field(() => OrderProductCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderProductCreateManyProductInputEnvelope)
    createMany?: OrderProductCreateManyProductInputEnvelope;

    @Field(() => [OrderProductWhereUniqueInput], {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>>;
}
