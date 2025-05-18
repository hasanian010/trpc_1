import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateWithoutVariationsInput } from './order-product-update-without-variations.input';

@InputType()
export class OrderProductUpdateToOneWithWhereWithoutVariationsInput {

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => OrderProductUpdateWithoutVariationsInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutVariationsInput)
    data!: OrderProductUpdateWithoutVariationsInput;
}
