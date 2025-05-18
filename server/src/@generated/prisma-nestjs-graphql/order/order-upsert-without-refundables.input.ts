import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutRefundablesInput } from './order-update-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutRefundablesInput } from './order-create-without-refundables.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutRefundablesInput {

    @Field(() => OrderUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderUpdateWithoutRefundablesInput)
    update!: OrderUpdateWithoutRefundablesInput;

    @Field(() => OrderCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderCreateWithoutRefundablesInput)
    create!: OrderCreateWithoutRefundablesInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
