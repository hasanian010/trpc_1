import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerUpdateWithoutProductsInput } from './order-seller-update-without-products.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateWithoutProductsInput } from './order-seller-create-without-products.input';
import { OrderSellerWhereInput } from './order-seller-where.input';

@InputType()
export class OrderSellerUpsertWithoutProductsInput {

    @Field(() => OrderSellerUpdateWithoutProductsInput, {nullable:false})
    @Type(() => OrderSellerUpdateWithoutProductsInput)
    update!: OrderSellerUpdateWithoutProductsInput;

    @Field(() => OrderSellerCreateWithoutProductsInput, {nullable:false})
    @Type(() => OrderSellerCreateWithoutProductsInput)
    create!: OrderSellerCreateWithoutProductsInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    where?: OrderSellerWhereInput;
}
