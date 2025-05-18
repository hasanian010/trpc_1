import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductCreateWithoutOrderSellerInput } from './order-product-create-without-order-seller.input';

@InputType()
export class OrderProductCreateOrConnectWithoutOrderSellerInput {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductCreateWithoutOrderSellerInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutOrderSellerInput)
    create!: OrderProductCreateWithoutOrderSellerInput;
}
