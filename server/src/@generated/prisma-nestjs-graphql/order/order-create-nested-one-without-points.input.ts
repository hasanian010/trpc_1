import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPointsInput } from './order-create-without-points.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutPointsInput } from './order-create-or-connect-without-points.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutPointsInput {

    @Field(() => OrderCreateWithoutPointsInput, {nullable:true})
    @Type(() => OrderCreateWithoutPointsInput)
    create?: OrderCreateWithoutPointsInput;

    @Field(() => OrderCreateOrConnectWithoutPointsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPointsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutPointsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;
}
