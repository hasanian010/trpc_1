import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderCreateNestedOneWithoutIncomesInput } from '../order/order-create-nested-one-without-incomes.input';

@InputType()
export class IncomeCreateWithoutSellerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    income?: number;

    @Field(() => Boolean, {nullable:true})
    paySuccess?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderCreateNestedOneWithoutIncomesInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutIncomesInput;
}
