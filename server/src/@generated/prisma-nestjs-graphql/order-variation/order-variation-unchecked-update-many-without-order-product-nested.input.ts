import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationCreateWithoutOrderProductInput } from './order-variation-create-without-order-product.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateOrConnectWithoutOrderProductInput } from './order-variation-create-or-connect-without-order-product.input';
import { OrderVariationUpsertWithWhereUniqueWithoutOrderProductInput } from './order-variation-upsert-with-where-unique-without-order-product.input';
import { OrderVariationCreateManyOrderProductInputEnvelope } from './order-variation-create-many-order-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { OrderVariationUpdateWithWhereUniqueWithoutOrderProductInput } from './order-variation-update-with-where-unique-without-order-product.input';
import { OrderVariationUpdateManyWithWhereWithoutOrderProductInput } from './order-variation-update-many-with-where-without-order-product.input';
import { OrderVariationScalarWhereInput } from './order-variation-scalar-where.input';

@InputType()
export class OrderVariationUncheckedUpdateManyWithoutOrderProductNestedInput {

    @Field(() => [OrderVariationCreateWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationCreateWithoutOrderProductInput)
    create?: Array<OrderVariationCreateWithoutOrderProductInput>;

    @Field(() => [OrderVariationCreateOrConnectWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationCreateOrConnectWithoutOrderProductInput)
    connectOrCreate?: Array<OrderVariationCreateOrConnectWithoutOrderProductInput>;

    @Field(() => [OrderVariationUpsertWithWhereUniqueWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationUpsertWithWhereUniqueWithoutOrderProductInput)
    upsert?: Array<OrderVariationUpsertWithWhereUniqueWithoutOrderProductInput>;

    @Field(() => OrderVariationCreateManyOrderProductInputEnvelope, {nullable:true})
    @Type(() => OrderVariationCreateManyOrderProductInputEnvelope)
    createMany?: OrderVariationCreateManyOrderProductInputEnvelope;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationUpdateWithWhereUniqueWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationUpdateWithWhereUniqueWithoutOrderProductInput)
    update?: Array<OrderVariationUpdateWithWhereUniqueWithoutOrderProductInput>;

    @Field(() => [OrderVariationUpdateManyWithWhereWithoutOrderProductInput], {nullable:true})
    @Type(() => OrderVariationUpdateManyWithWhereWithoutOrderProductInput)
    updateMany?: Array<OrderVariationUpdateManyWithWhereWithoutOrderProductInput>;

    @Field(() => [OrderVariationScalarWhereInput], {nullable:true})
    @Type(() => OrderVariationScalarWhereInput)
    deleteMany?: Array<OrderVariationScalarWhereInput>;
}
