import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateWithoutSellerInput } from './order-seller-create-without-seller.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateOrConnectWithoutSellerInput } from './order-seller-create-or-connect-without-seller.input';
import { OrderSellerCreateManySellerInputEnvelope } from './order-seller-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';

@InputType()
export class OrderSellerUncheckedCreateNestedManyWithoutSellerInput {

    @Field(() => [OrderSellerCreateWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerCreateWithoutSellerInput)
    create?: Array<OrderSellerCreateWithoutSellerInput>;

    @Field(() => [OrderSellerCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<OrderSellerCreateOrConnectWithoutSellerInput>;

    @Field(() => OrderSellerCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => OrderSellerCreateManySellerInputEnvelope)
    createMany?: OrderSellerCreateManySellerInputEnvelope;

    @Field(() => [OrderSellerWhereUniqueInput], {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>>;
}
