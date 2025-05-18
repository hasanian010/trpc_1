import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateWithoutSellerInput } from './order-seller-create-without-seller.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateOrConnectWithoutSellerInput } from './order-seller-create-or-connect-without-seller.input';
import { OrderSellerUpsertWithWhereUniqueWithoutSellerInput } from './order-seller-upsert-with-where-unique-without-seller.input';
import { OrderSellerCreateManySellerInputEnvelope } from './order-seller-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { OrderSellerUpdateWithWhereUniqueWithoutSellerInput } from './order-seller-update-with-where-unique-without-seller.input';
import { OrderSellerUpdateManyWithWhereWithoutSellerInput } from './order-seller-update-many-with-where-without-seller.input';
import { OrderSellerScalarWhereInput } from './order-seller-scalar-where.input';

@InputType()
export class OrderSellerUpdateManyWithoutSellerNestedInput {

    @Field(() => [OrderSellerCreateWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerCreateWithoutSellerInput)
    create?: Array<OrderSellerCreateWithoutSellerInput>;

    @Field(() => [OrderSellerCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<OrderSellerCreateOrConnectWithoutSellerInput>;

    @Field(() => [OrderSellerUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<OrderSellerUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => OrderSellerCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => OrderSellerCreateManySellerInputEnvelope)
    createMany?: OrderSellerCreateManySellerInputEnvelope;

    @Field(() => [OrderSellerWhereUniqueInput], {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>>;

    @Field(() => [OrderSellerWhereUniqueInput], {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>>;

    @Field(() => [OrderSellerWhereUniqueInput], {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>>;

    @Field(() => [OrderSellerWhereUniqueInput], {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>>;

    @Field(() => [OrderSellerUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<OrderSellerUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [OrderSellerUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => OrderSellerUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<OrderSellerUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [OrderSellerScalarWhereInput], {nullable:true})
    @Type(() => OrderSellerScalarWhereInput)
    deleteMany?: Array<OrderSellerScalarWhereInput>;
}
