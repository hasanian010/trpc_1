import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutPointsInput } from './order-update-without-points.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutPointsInput } from './order-create-without-points.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutPointsInput {

    @Field(() => OrderUpdateWithoutPointsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPointsInput)
    update!: OrderUpdateWithoutPointsInput;

    @Field(() => OrderCreateWithoutPointsInput, {nullable:false})
    @Type(() => OrderCreateWithoutPointsInput)
    create!: OrderCreateWithoutPointsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
