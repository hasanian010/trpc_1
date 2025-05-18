import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationCreateWithoutOrderProductInput } from './order-variation-create-without-order-product.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateOrConnectWithoutOrderProductInput } from './order-variation-create-or-connect-without-order-product.input';
import { OrderVariationCreateManyOrderProductInputEnvelope } from './order-variation-create-many-order-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';

@InputType()
export class OrderVariationCreateNestedManyWithoutOrderProductInput {

    @Field(() => [OrderVariationCreateWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationCreateWithoutOrderProductInput)
    create?: Array<OrderVariationCreateWithoutOrderProductInput>;

    @Field(() => [OrderVariationCreateOrConnectWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationCreateOrConnectWithoutOrderProductInput)
    connectOrCreate?: Array<OrderVariationCreateOrConnectWithoutOrderProductInput>;

    @Field(() => OrderVariationCreateManyOrderProductInputEnvelope, {nullable:true})
    @Type(() => OrderVariationCreateManyOrderProductInputEnvelope)
    createMany?: OrderVariationCreateManyOrderProductInputEnvelope;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;
}
