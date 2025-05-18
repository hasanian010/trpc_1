import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderProductCreaterefundableIdsInput } from './order-product-createrefundable-ids.input';
import { OrderVariationUncheckedCreateNestedManyWithoutOrderProductInput } from '../order-variation/order-variation-unchecked-create-nested-many-without-order-product.input';

@InputType()
export class OrderProductUncheckedCreateWithoutRefundablesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    tax!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    orderSellerId?: string;

    @Field(() => OrderProductCreaterefundableIdsInput, {nullable:true})
    refundableIds?: OrderProductCreaterefundableIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderVariationUncheckedCreateNestedManyWithoutOrderProductInput, {nullable:true})
    variations?: OrderVariationUncheckedCreateNestedManyWithoutOrderProductInput;
}
