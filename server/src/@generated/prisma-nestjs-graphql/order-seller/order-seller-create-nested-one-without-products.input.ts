import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateWithoutProductsInput } from './order-seller-create-without-products.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateOrConnectWithoutProductsInput } from './order-seller-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';

@InputType()
export class OrderSellerCreateNestedOneWithoutProductsInput {

    @Field(() => OrderSellerCreateWithoutProductsInput, {nullable:true})
    @Type(() => OrderSellerCreateWithoutProductsInput)
    create?: OrderSellerCreateWithoutProductsInput;

    @Field(() => OrderSellerCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => OrderSellerCreateOrConnectWithoutProductsInput)
    connectOrCreate?: OrderSellerCreateOrConnectWithoutProductsInput;

    @Field(() => OrderSellerWhereUniqueInput, {nullable:true})
    @Type(() => OrderSellerWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;
}
