import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateWithoutOrderInput } from './order-seller-create-without-order.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateOrConnectWithoutOrderInput } from './order-seller-create-or-connect-without-order.input';
import { OrderSellerUpsertWithWhereUniqueWithoutOrderInput } from './order-seller-upsert-with-where-unique-without-order.input';
import { OrderSellerCreateManyOrderInputEnvelope } from './order-seller-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { OrderSellerUpdateWithWhereUniqueWithoutOrderInput } from './order-seller-update-with-where-unique-without-order.input';
import { OrderSellerUpdateManyWithWhereWithoutOrderInput } from './order-seller-update-many-with-where-without-order.input';
import { OrderSellerScalarWhereInput } from './order-seller-scalar-where.input';

@InputType()
export class OrderSellerUpdateManyWithoutOrderNestedInput {

    @Field(() => [OrderSellerCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerCreateWithoutOrderInput)
    create?: Array<OrderSellerCreateWithoutOrderInput>;

    @Field(() => [OrderSellerCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderSellerCreateOrConnectWithoutOrderInput>;

    @Field(() => [OrderSellerUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<OrderSellerUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => OrderSellerCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderSellerCreateManyOrderInputEnvelope)
    createMany?: OrderSellerCreateManyOrderInputEnvelope;

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

    @Field(() => [OrderSellerUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<OrderSellerUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [OrderSellerUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => OrderSellerUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<OrderSellerUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [OrderSellerScalarWhereInput], {nullable:true})
    @Type(() => OrderSellerScalarWhereInput)
    deleteMany?: Array<OrderSellerScalarWhereInput>;
}
