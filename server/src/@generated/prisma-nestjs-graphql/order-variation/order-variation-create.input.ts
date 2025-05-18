import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateNestedOneWithoutVariationsInput } from '../order-product/order-product-create-nested-one-without-variations.input';
import { RefundableCreateNestedManyWithoutVariationsInput } from '../refundable/refundable-create-nested-many-without-variations.input';

@InputType()
export class OrderVariationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    variant!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderProductCreateNestedOneWithoutVariationsInput, {nullable:false})
    orderProduct!: OrderProductCreateNestedOneWithoutVariationsInput;

    @Field(() => RefundableCreateNestedManyWithoutVariationsInput, {nullable:true})
    refundables?: RefundableCreateNestedManyWithoutVariationsInput;
}
