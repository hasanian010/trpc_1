import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutPointsInput } from './order-update-without-points.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutPointsInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutPointsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPointsInput)
    data!: OrderUpdateWithoutPointsInput;
}
