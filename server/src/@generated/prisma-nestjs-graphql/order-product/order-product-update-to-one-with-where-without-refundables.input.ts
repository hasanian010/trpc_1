import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateWithoutRefundablesInput } from './order-product-update-without-refundables.input';

@InputType()
export class OrderProductUpdateToOneWithWhereWithoutRefundablesInput {

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => OrderProductUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutRefundablesInput)
    data!: OrderProductUpdateWithoutRefundablesInput;
}
