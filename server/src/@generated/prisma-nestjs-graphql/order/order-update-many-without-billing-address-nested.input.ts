import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutBillingAddressInput } from './order-create-without-billing-address.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutBillingAddressInput } from './order-create-or-connect-without-billing-address.input';
import { OrderUpsertWithWhereUniqueWithoutBillingAddressInput } from './order-upsert-with-where-unique-without-billing-address.input';
import { OrderCreateManyBillingAddressInputEnvelope } from './order-create-many-billing-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutBillingAddressInput } from './order-update-with-where-unique-without-billing-address.input';
import { OrderUpdateManyWithWhereWithoutBillingAddressInput } from './order-update-many-with-where-without-billing-address.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutBillingAddressNestedInput {

    @Field(() => [OrderCreateWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderCreateWithoutBillingAddressInput)
    create?: Array<OrderCreateWithoutBillingAddressInput>;

    @Field(() => [OrderCreateOrConnectWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutBillingAddressInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutBillingAddressInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutBillingAddressInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutBillingAddressInput>;

    @Field(() => OrderCreateManyBillingAddressInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyBillingAddressInputEnvelope)
    createMany?: OrderCreateManyBillingAddressInputEnvelope;

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

    @Field(() => [OrderUpdateWithWhereUniqueWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutBillingAddressInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutBillingAddressInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutBillingAddressInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutBillingAddressInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}
