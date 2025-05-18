import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShippingAddressInput } from './order-create-without-shipping-address.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutShippingAddressInput } from './order-create-or-connect-without-shipping-address.input';
import { OrderUpsertWithWhereUniqueWithoutShippingAddressInput } from './order-upsert-with-where-unique-without-shipping-address.input';
import { OrderCreateManyShippingAddressInputEnvelope } from './order-create-many-shipping-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutShippingAddressInput } from './order-update-with-where-unique-without-shipping-address.input';
import { OrderUpdateManyWithWhereWithoutShippingAddressInput } from './order-update-many-with-where-without-shipping-address.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutShippingAddressNestedInput {

    @Field(() => [OrderCreateWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderCreateWithoutShippingAddressInput)
    create?: Array<OrderCreateWithoutShippingAddressInput>;

    @Field(() => [OrderCreateOrConnectWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutShippingAddressInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutShippingAddressInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutShippingAddressInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutShippingAddressInput>;

    @Field(() => OrderCreateManyShippingAddressInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyShippingAddressInputEnvelope)
    createMany?: OrderCreateManyShippingAddressInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutShippingAddressInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutShippingAddressInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutShippingAddressInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutShippingAddressInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}
