import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPointsInput } from './order-create-without-points.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutPointsInput } from './order-create-or-connect-without-points.input';
import { OrderUpsertWithoutPointsInput } from './order-upsert-without-points.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutPointsInput } from './order-update-to-one-with-where-without-points.input';

@InputType()
export class OrderUpdateOneRequiredWithoutPointsNestedInput {

    @Field(() => OrderCreateWithoutPointsInput, {nullable:true})
    @Type(() => OrderCreateWithoutPointsInput)
    create?: OrderCreateWithoutPointsInput;

    @Field(() => OrderCreateOrConnectWithoutPointsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPointsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutPointsInput;

    @Field(() => OrderUpsertWithoutPointsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutPointsInput)
    upsert?: OrderUpsertWithoutPointsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutPointsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutPointsInput)
    update?: OrderUpdateToOneWithWhereWithoutPointsInput;
}
