import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { Type } from 'class-transformer';
import { OrderSellerUpdateWithoutOrderInput } from './order-seller-update-without-order.input';

@InputType()
export class OrderSellerUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => OrderSellerWhereUniqueInput, {nullable:false})
    @Type(() => OrderSellerWhereUniqueInput)
    where!: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => OrderSellerUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderSellerUpdateWithoutOrderInput)
    data!: OrderSellerUpdateWithoutOrderInput;
}
