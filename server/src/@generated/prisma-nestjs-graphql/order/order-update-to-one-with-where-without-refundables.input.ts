import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutRefundablesInput } from './order-update-without-refundables.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutRefundablesInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderUpdateWithoutRefundablesInput)
    data!: OrderUpdateWithoutRefundablesInput;
}
