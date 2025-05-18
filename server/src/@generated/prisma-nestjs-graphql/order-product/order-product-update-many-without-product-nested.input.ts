import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutProductInput } from './order-product-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutProductInput } from './order-product-create-or-connect-without-product.input';
import { OrderProductUpsertWithWhereUniqueWithoutProductInput } from './order-product-upsert-with-where-unique-without-product.input';
import { OrderProductCreateManyProductInputEnvelope } from './order-product-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { OrderProductUpdateWithWhereUniqueWithoutProductInput } from './order-product-update-with-where-unique-without-product.input';
import { OrderProductUpdateManyWithWhereWithoutProductInput } from './order-product-update-many-with-where-without-product.input';
import { OrderProductScalarWhereInput } from './order-product-scalar-where.input';

@InputType()
export class OrderProductUpdateManyWithoutProductNestedInput {

    @Field(() => [OrderProductCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderProductCreateWithoutProductInput)
    create?: Array<OrderProductCreateWithoutProductInput>;

    @Field(() => [OrderProductCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderProductCreateOrConnectWithoutProductInput>;

    @Field(() => [OrderProductUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderProductUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderProductUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => OrderProductCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderProductCreateManyProductInputEnvelope)
    createMany?: OrderProductCreateManyProductInputEnvelope;

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

    @Field(() => [OrderProductUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderProductUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderProductUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [OrderProductUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderProductUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderProductUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [OrderProductScalarWhereInput], {nullable:true})
    @Type(() => OrderProductScalarWhereInput)
    deleteMany?: Array<OrderProductScalarWhereInput>;
}
