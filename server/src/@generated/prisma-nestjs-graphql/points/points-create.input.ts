import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderCreateNestedOneWithoutPointsInput } from '../order/order-create-nested-one-without-points.input';
import { UserCreateNestedOneWithoutPointsInput } from '../user/user-create-nested-one-without-points.input';

@InputType()
export class PointsCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutPointsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPointsInput;
}
