import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductUpdateWithoutRefundablesInput } from './order-product-update-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderProductCreateWithoutRefundablesInput } from './order-product-create-without-refundables.input';
import { OrderProductWhereInput } from './order-product-where.input';

@InputType()
export class OrderProductUpsertWithoutRefundablesInput {

    @Field(() => OrderProductUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutRefundablesInput)
    update!: OrderProductUpdateWithoutRefundablesInput;

    @Field(() => OrderProductCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutRefundablesInput)
    create!: OrderProductCreateWithoutRefundablesInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;
}
