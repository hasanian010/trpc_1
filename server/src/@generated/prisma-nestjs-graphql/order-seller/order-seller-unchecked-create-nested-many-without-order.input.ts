import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateWithoutOrderInput } from './order-seller-create-without-order.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateOrConnectWithoutOrderInput } from './order-seller-create-or-connect-without-order.input';
import { OrderSellerCreateManyOrderInputEnvelope } from './order-seller-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';

@InputType()
export class OrderSellerUncheckedCreateNestedManyWithoutOrderInput {

    @Field(() => [OrderSellerCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerCreateWithoutOrderInput)
    create?: Array<OrderSellerCreateWithoutOrderInput>;

    @Field(() => [OrderSellerCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderSellerCreateOrConnectWithoutOrderInput>;

    @Field(() => OrderSellerCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderSellerCreateManyOrderInputEnvelope)
    createMany?: OrderSellerCreateManyOrderInputEnvelope;

    @Field(() => [OrderSellerWhereUniqueInput], {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>>;
}
