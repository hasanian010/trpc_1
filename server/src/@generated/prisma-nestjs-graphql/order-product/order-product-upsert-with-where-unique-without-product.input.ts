import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateWithoutProductInput } from './order-product-update-without-product.input';
import { OrderProductCreateWithoutProductInput } from './order-product-create-without-product.input';

@InputType()
export class OrderProductUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutProductInput)
    update!: OrderProductUpdateWithoutProductInput;

    @Field(() => OrderProductCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutProductInput)
    create!: OrderProductCreateWithoutProductInput;
}
