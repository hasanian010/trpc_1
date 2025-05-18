import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateWithoutProductsInput } from './order-seller-create-without-products.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateOrConnectWithoutProductsInput } from './order-seller-create-or-connect-without-products.input';
import { OrderSellerUpsertWithoutProductsInput } from './order-seller-upsert-without-products.input';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { OrderSellerUpdateToOneWithWhereWithoutProductsInput } from './order-seller-update-to-one-with-where-without-products.input';

@InputType()
export class OrderSellerUpdateOneWithoutProductsNestedInput {

    @Field(() => OrderSellerCreateWithoutProductsInput, {nullable:true})
    @Type(() => OrderSellerCreateWithoutProductsInput)
    create?: OrderSellerCreateWithoutProductsInput;

    @Field(() => OrderSellerCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => OrderSellerCreateOrConnectWithoutProductsInput)
    connectOrCreate?: OrderSellerCreateOrConnectWithoutProductsInput;

    @Field(() => OrderSellerUpsertWithoutProductsInput, {nullable:true})
    @Type(() => OrderSellerUpsertWithoutProductsInput)
    upsert?: OrderSellerUpsertWithoutProductsInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    disconnect?: OrderSellerWhereInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    delete?: OrderSellerWhereInput;

    @Field(() => OrderSellerWhereUniqueInput, {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => OrderSellerUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => OrderSellerUpdateToOneWithWhereWithoutProductsInput)
    update?: OrderSellerUpdateToOneWithWhereWithoutProductsInput;
}
