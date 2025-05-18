import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { SellerCreateNestedOneWithoutOrderSellersInput } from '../seller/seller-create-nested-one-without-order-sellers.input';
import { OrderCreateNestedOneWithoutSellersInput } from '../order/order-create-nested-one-without-sellers.input';

@InputType()
export class OrderSellerCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    cancelBy?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SellerCreateNestedOneWithoutOrderSellersInput, {nullable:false})
    seller!: SellerCreateNestedOneWithoutOrderSellersInput;

    @Field(() => OrderCreateNestedOneWithoutSellersInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutSellersInput;
}
