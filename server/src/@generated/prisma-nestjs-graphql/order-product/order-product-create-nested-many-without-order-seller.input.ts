import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutOrderSellerInput } from './order-product-create-without-order-seller.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutOrderSellerInput } from './order-product-create-or-connect-without-order-seller.input';
import { OrderProductCreateManyOrderSellerInputEnvelope } from './order-product-create-many-order-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';

@InputType()
export class OrderProductCreateNestedManyWithoutOrderSellerInput {

    @Field(() => [OrderProductCreateWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductCreateWithoutOrderSellerInput)
    create?: Array<OrderProductCreateWithoutOrderSellerInput>;

    @Field(() => [OrderProductCreateOrConnectWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutOrderSellerInput)
    connectOrCreate?: Array<OrderProductCreateOrConnectWithoutOrderSellerInput>;

    @Field(() => OrderProductCreateManyOrderSellerInputEnvelope, {nullable:true})
    @Type(() => OrderProductCreateManyOrderSellerInputEnvelope)
    createMany?: OrderProductCreateManyOrderSellerInputEnvelope;

    @Field(() => [OrderProductWhereUniqueInput], {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>>;
}
