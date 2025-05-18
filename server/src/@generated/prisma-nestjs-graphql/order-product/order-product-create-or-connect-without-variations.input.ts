import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductCreateWithoutVariationsInput } from './order-product-create-without-variations.input';

@InputType()
export class OrderProductCreateOrConnectWithoutVariationsInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductCreateWithoutVariationsInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutVariationsInput)
    create!: OrderProductCreateWithoutVariationsInput;
}
