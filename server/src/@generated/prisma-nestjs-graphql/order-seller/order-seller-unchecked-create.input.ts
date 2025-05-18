import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderProductUncheckedCreateNestedManyWithoutOrderSellerInput } from '../order-product/order-product-unchecked-create-nested-many-without-order-seller.input';

@InputType()
export class OrderSellerUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

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

    @Field(() => OrderProductUncheckedCreateNestedManyWithoutOrderSellerInput, {nullable:true})
    products?: OrderProductUncheckedCreateNestedManyWithoutOrderSellerInput;
}
