import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderProductCreateNestedManyWithoutOrderSellerInput } from '../order-product/order-product-create-nested-many-without-order-seller.input';
import { OrderCreateNestedOneWithoutSellersInput } from '../order/order-create-nested-one-without-sellers.input';

@InputType()
export class OrderSellerCreateWithoutSellerInput {

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

    @Field(() => OrderProductCreateNestedManyWithoutOrderSellerInput, {nullable:true})
    products?: OrderProductCreateNestedManyWithoutOrderSellerInput;

    @Field(() => OrderCreateNestedOneWithoutSellersInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutSellersInput;
}
