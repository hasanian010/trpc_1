import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShippingAddressInput } from './order-create-without-shipping-address.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutShippingAddressInput } from './order-create-or-connect-without-shipping-address.input';
import { OrderCreateManyShippingAddressInputEnvelope } from './order-create-many-shipping-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutShippingAddressInput {

    @Field(() => [OrderCreateWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderCreateWithoutShippingAddressInput)
    create?: Array<OrderCreateWithoutShippingAddressInput>;

    @Field(() => [OrderCreateOrConnectWithoutShippingAddressInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutShippingAddressInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutShippingAddressInput>;

    @Field(() => OrderCreateManyShippingAddressInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyShippingAddressInputEnvelope)
    createMany?: OrderCreateManyShippingAddressInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;
}
