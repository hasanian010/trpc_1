import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderCreateNestedOneWithoutPointsInput } from '../order/order-create-nested-one-without-points.input';

@InputType()
export class PointsCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    points!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderCreateNestedOneWithoutPointsInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutPointsInput;
}
