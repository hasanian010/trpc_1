import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutPointsInput } from './order-create-without-points.input';

@InputType()
export class OrderCreateOrConnectWithoutPointsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutPointsInput, {nullable:false})
    @Type(() => OrderCreateWithoutPointsInput)
    create!: OrderCreateWithoutPointsInput;
}
