import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateWithoutOrderSellerInput } from './order-product-update-without-order-seller.input';
import { OrderProductCreateWithoutOrderSellerInput } from './order-product-create-without-order-seller.input';

@InputType()
export class OrderProductUpsertWithWhereUniqueWithoutOrderSellerInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductUpdateWithoutOrderSellerInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutOrderSellerInput)
    update!: OrderProductUpdateWithoutOrderSellerInput;

    @Field(() => OrderProductCreateWithoutOrderSellerInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutOrderSellerInput)
    create!: OrderProductCreateWithoutOrderSellerInput;
}
