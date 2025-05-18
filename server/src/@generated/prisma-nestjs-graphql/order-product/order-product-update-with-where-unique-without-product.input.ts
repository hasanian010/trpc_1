import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateWithoutProductInput } from './order-product-update-without-product.input';

@InputType()
export class OrderProductUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutProductInput)
    data!: OrderProductUpdateWithoutProductInput;
}
