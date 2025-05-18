import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductCreateWithoutProductInput } from './order-product-create-without-product.input';

@InputType()
export class OrderProductCreateOrConnectWithoutProductInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutProductInput)
    create!: OrderProductCreateWithoutProductInput;
}
