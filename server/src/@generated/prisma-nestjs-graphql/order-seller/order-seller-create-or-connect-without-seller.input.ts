import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateWithoutSellerInput } from './order-seller-create-without-seller.input';

@InputType()
export class OrderSellerCreateOrConnectWithoutSellerInput {

    @Field(() => OrderSellerWhereUniqueInput, {nullable:false})
    @Type(() => OrderSellerWhereUniqueInput)
    where!: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => OrderSellerCreateWithoutSellerInput, {nullable:false})
    @Type(() => OrderSellerCreateWithoutSellerInput)
    create!: OrderSellerCreateWithoutSellerInput;
}
