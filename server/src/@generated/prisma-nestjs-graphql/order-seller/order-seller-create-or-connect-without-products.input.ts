import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateWithoutProductsInput } from './order-seller-create-without-products.input';

@InputType()
export class OrderSellerCreateOrConnectWithoutProductsInput {

    @Field(() => OrderSellerWhereUniqueInput, {nullable:false})
    @Type(() => OrderSellerWhereUniqueInput)
    where!: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => OrderSellerCreateWithoutProductsInput, {nullable:false})
    @Type(() => OrderSellerCreateWithoutProductsInput)
    create!: OrderSellerCreateWithoutProductsInput;
}
