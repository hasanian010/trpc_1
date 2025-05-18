import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateWithoutOrderSellerInput } from './order-product-update-without-order-seller.input';

@InputType()
export class OrderProductUpdateWithWhereUniqueWithoutOrderSellerInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductUpdateWithoutOrderSellerInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutOrderSellerInput)
    data!: OrderProductUpdateWithoutOrderSellerInput;
}
