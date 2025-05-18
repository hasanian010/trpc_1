import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderProductCreaterefundableIdsInput } from './order-product-createrefundable-ids.input';
import { ProductCreateNestedOneWithoutOrderProductsInput } from '../product/product-create-nested-one-without-order-products.input';
import { OrderVariationCreateNestedManyWithoutOrderProductInput } from '../order-variation/order-variation-create-nested-many-without-order-product.input';
import { OrderSellerCreateNestedOneWithoutProductsInput } from '../order-seller/order-seller-create-nested-one-without-products.input';

@InputType()
export class OrderProductCreateWithoutRefundablesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    tax!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => OrderProductCreaterefundableIdsInput, {nullable:true})
    refundableIds?: OrderProductCreaterefundableIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutOrderProductsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutOrderProductsInput;

    @Field(() => OrderVariationCreateNestedManyWithoutOrderProductInput, {nullable:true})
    variations?: OrderVariationCreateNestedManyWithoutOrderProductInput;

    @Field(() => OrderSellerCreateNestedOneWithoutProductsInput, {nullable:true})
    orderSeller?: OrderSellerCreateNestedOneWithoutProductsInput;
}
