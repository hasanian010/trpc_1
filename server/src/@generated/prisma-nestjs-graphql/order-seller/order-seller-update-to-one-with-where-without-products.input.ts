import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { Type } from 'class-transformer';
import { OrderSellerUpdateWithoutProductsInput } from './order-seller-update-without-products.input';

@InputType()
export class OrderSellerUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    where?: OrderSellerWhereInput;

    @Field(() => OrderSellerUpdateWithoutProductsInput, {nullable:false})
    @Type(() => OrderSellerUpdateWithoutProductsInput)
    data!: OrderSellerUpdateWithoutProductsInput;
}
