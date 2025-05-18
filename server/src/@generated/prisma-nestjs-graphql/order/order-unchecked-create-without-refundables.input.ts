import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderSellerUncheckedCreateNestedManyWithoutOrderInput } from '../order-seller/order-seller-unchecked-create-nested-many-without-order.input';
import { PaymentInfoUncheckedCreateNestedOneWithoutOrderInput } from '../payment-info/payment-info-unchecked-create-nested-one-without-order.input';
import { PointsUncheckedCreateNestedManyWithoutOrderInput } from '../points/points-unchecked-create-nested-many-without-order.input';
import { IncomeUncheckedCreateNestedManyWithoutOrderInput } from '../income/income-unchecked-create-nested-many-without-order.input';

@InputType()
export class OrderUncheckedCreateWithoutRefundablesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:true})
    couponDiscount?: number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => Float, {nullable:false})
    subtotal!: number;

    @Field(() => Float, {nullable:false})
    shippingFees!: number;

    @Field(() => Float, {nullable:false})
    shippingCount!: number;

    @Field(() => String, {nullable:false})
    estimateDelivery!: string;

    @Field(() => String, {nullable:true})
    shippingAddressId?: string;

    @Field(() => String, {nullable:true})
    billingAddressId?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Boolean, {nullable:true})
    paymentStatus?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderSellerUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    sellers?: OrderSellerUncheckedCreateNestedManyWithoutOrderInput;

    @Field(() => PaymentInfoUncheckedCreateNestedOneWithoutOrderInput, {nullable:true})
    payment?: PaymentInfoUncheckedCreateNestedOneWithoutOrderInput;

    @Field(() => PointsUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    points?: PointsUncheckedCreateNestedManyWithoutOrderInput;

    @Field(() => IncomeUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    incomes?: IncomeUncheckedCreateNestedManyWithoutOrderInput;
}
