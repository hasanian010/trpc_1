import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductUpdateWithoutVariationsInput } from './order-product-update-without-variations.input';
import { Type } from 'class-transformer';
import { OrderProductCreateWithoutVariationsInput } from './order-product-create-without-variations.input';
import { OrderProductWhereInput } from './order-product-where.input';

@InputType()
export class OrderProductUpsertWithoutVariationsInput {

    @Field(() => OrderProductUpdateWithoutVariationsInput, {nullable:false})
    @Type(() => OrderProductUpdateWithoutVariationsInput)
    update!: OrderProductUpdateWithoutVariationsInput;

    @Field(() => OrderProductCreateWithoutVariationsInput, {nullable:false})
    @Type(() => OrderProductCreateWithoutVariationsInput)
    create!: OrderProductCreateWithoutVariationsInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;
}
