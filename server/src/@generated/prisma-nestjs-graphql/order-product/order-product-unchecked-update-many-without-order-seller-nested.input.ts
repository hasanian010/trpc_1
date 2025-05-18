import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutOrderSellerInput } from './order-product-create-without-order-seller.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutOrderSellerInput } from './order-product-create-or-connect-without-order-seller.input';
import { OrderProductUpsertWithWhereUniqueWithoutOrderSellerInput } from './order-product-upsert-with-where-unique-without-order-seller.input';
import { OrderProductCreateManyOrderSellerInputEnvelope } from './order-product-create-many-order-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { OrderProductUpdateWithWhereUniqueWithoutOrderSellerInput } from './order-product-update-with-where-unique-without-order-seller.input';
import { OrderProductUpdateManyWithWhereWithoutOrderSellerInput } from './order-product-update-many-with-where-without-order-seller.input';
import { OrderProductScalarWhereInput } from './order-product-scalar-where.input';

@InputType()
export class OrderProductUncheckedUpdateManyWithoutOrderSellerNestedInput {

    @Field(() => [OrderProductCreateWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductCreateWithoutOrderSellerInput)
    create?: Array<OrderProductCreateWithoutOrderSellerInput>;

    @Field(() => [OrderProductCreateOrConnectWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutOrderSellerInput)
    connectOrCreate?: Array<OrderProductCreateOrConnectWithoutOrderSellerInput>;

    @Field(() => [OrderProductUpsertWithWhereUniqueWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductUpsertWithWhereUniqueWithoutOrderSellerInput)
    upsert?: Array<OrderProductUpsertWithWhereUniqueWithoutOrderSellerInput>;

    @Field(() => OrderProductCreateManyOrderSellerInputEnvelope, {nullable:true})
    @Type(() => OrderProductCreateManyOrderSellerInputEnvelope)
    createMany?: OrderProductCreateManyOrderSellerInputEnvelope;

    @Field(() => [OrderProductWhereUniqueInput], {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>>;

    @Field(() => [OrderProductWhereUniqueInput], {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>>;

    @Field(() => [OrderProductWhereUniqueInput], {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>>;

    @Field(() => [OrderProductWhereUniqueInput], {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>>;

    @Field(() => [OrderProductUpdateWithWhereUniqueWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductUpdateWithWhereUniqueWithoutOrderSellerInput)
    update?: Array<OrderProductUpdateWithWhereUniqueWithoutOrderSellerInput>;

    @Field(() => [OrderProductUpdateManyWithWhereWithoutOrderSellerInput], {nullable:true})
    @Type(() => OrderProductUpdateManyWithWhereWithoutOrderSellerInput)
    updateMany?: Array<OrderProductUpdateManyWithWhereWithoutOrderSellerInput>;

    @Field(() => [OrderProductScalarWhereInput], {nullable:true})
    @Type(() => OrderProductScalarWhereInput)
    deleteMany?: Array<OrderProductScalarWhereInput>;
}
