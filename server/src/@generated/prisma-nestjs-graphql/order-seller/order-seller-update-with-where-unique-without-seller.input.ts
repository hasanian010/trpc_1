import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { Type } from 'class-transformer';
import { OrderSellerUpdateWithoutSellerInput } from './order-seller-update-without-seller.input';

@InputType()
export class OrderSellerUpdateWithWhereUniqueWithoutSellerInput {

    @Field(() => OrderSellerWhereUniqueInput, {nullable:false})
    @Type(() => OrderSellerWhereUniqueInput)
    where!: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => OrderSellerUpdateWithoutSellerInput, {nullable:false})
    @Type(() => OrderSellerUpdateWithoutSellerInput)
    data!: OrderSellerUpdateWithoutSellerInput;
}
