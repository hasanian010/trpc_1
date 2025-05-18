import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Type } from 'class-transformer';
import { OrderVariationUpdateWithoutOrderProductInput } from './order-variation-update-without-order-product.input';
import { OrderVariationCreateWithoutOrderProductInput } from './order-variation-create-without-order-product.input';

@InputType()
export class OrderVariationUpsertWithWhereUniqueWithoutOrderProductInput {

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

    @Field(() => OrderVariationUpdateWithoutOrderProductInput, {nullable:false})
    @Type(() => OrderVariationUpdateWithoutOrderProductInput)
    update!: OrderVariationUpdateWithoutOrderProductInput;

    @Field(() => OrderVariationCreateWithoutOrderProductInput, {nullable:false})
    @Type(() => OrderVariationCreateWithoutOrderProductInput)
    create!: OrderVariationCreateWithoutOrderProductInput;
}
