import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateWithoutOrderProductInput } from './order-variation-create-without-order-product.input';

@InputType()
export class OrderVariationCreateOrConnectWithoutOrderProductInput {

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

    @Field(() => OrderVariationCreateWithoutOrderProductInput, {nullable:false})
    @Type(() => OrderVariationCreateWithoutOrderProductInput)
    create!: OrderVariationCreateWithoutOrderProductInput;
}
