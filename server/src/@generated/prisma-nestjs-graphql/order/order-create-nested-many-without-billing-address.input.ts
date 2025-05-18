import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutBillingAddressInput } from './order-create-without-billing-address.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutBillingAddressInput } from './order-create-or-connect-without-billing-address.input';
import { OrderCreateManyBillingAddressInputEnvelope } from './order-create-many-billing-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutBillingAddressInput {

    @Field(() => [OrderCreateWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderCreateWithoutBillingAddressInput)
    create?: Array<OrderCreateWithoutBillingAddressInput>;

    @Field(() => [OrderCreateOrConnectWithoutBillingAddressInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutBillingAddressInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutBillingAddressInput>;

    @Field(() => OrderCreateManyBillingAddressInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyBillingAddressInputEnvelope)
    createMany?: OrderCreateManyBillingAddressInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;
}
