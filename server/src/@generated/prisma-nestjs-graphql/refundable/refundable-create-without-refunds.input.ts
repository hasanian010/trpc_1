import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRefundablesInput } from '../user/user-create-nested-one-without-refundables.input';
import { ProductCreateNestedOneWithoutRefundablesInput } from '../product/product-create-nested-one-without-refundables.input';
import { OrderProductCreateNestedOneWithoutRefundablesInput } from '../order-product/order-product-create-nested-one-without-refundables.input';
import { OrderCreateNestedOneWithoutRefundablesInput } from '../order/order-create-nested-one-without-refundables.input';
import { OrderVariationCreateNestedManyWithoutRefundablesInput } from '../order-variation/order-variation-create-nested-many-without-refundables.input';
import { SellerCreateNestedOneWithoutRefundablesInput } from '../seller/seller-create-nested-one-without-refundables.input';

@InputType()
export class RefundableCreateWithoutRefundsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Float, {nullable:true})
    couponDiscount?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRefundablesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutRefundablesInput;

    @Field(() => ProductCreateNestedOneWithoutRefundablesInput, {nullable:true})
    product?: ProductCreateNestedOneWithoutRefundablesInput;

    @Field(() => OrderProductCreateNestedOneWithoutRefundablesInput, {nullable:true})
    orderProduct?: OrderProductCreateNestedOneWithoutRefundablesInput;

    @Field(() => OrderCreateNestedOneWithoutRefundablesInput, {nullable:true})
    order?: OrderCreateNestedOneWithoutRefundablesInput;

    @Field(() => OrderVariationCreateNestedManyWithoutRefundablesInput, {nullable:true})
    variations?: OrderVariationCreateNestedManyWithoutRefundablesInput;

    @Field(() => SellerCreateNestedOneWithoutRefundablesInput, {nullable:true})
    seller?: SellerCreateNestedOneWithoutRefundablesInput;
}
