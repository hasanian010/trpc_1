import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderProductCreaterefundableIdsInput } from './order-product-createrefundable-ids.input';

@InputType()
export class OrderProductCreateManyProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
}
