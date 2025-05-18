import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderSellerCreateNestedManyWithoutOrderInput } from '../order-seller/order-seller-create-nested-many-without-order.input';
import { AddressCreateNestedOneWithoutShippingOrdersInput } from '../address/address-create-nested-one-without-shipping-orders.input';
import { AddressCreateNestedOneWithoutBillingOrdersInput } from '../address/address-create-nested-one-without-billing-orders.input';
import { UserCreateNestedOneWithoutOrdersInput } from '../user/user-create-nested-one-without-orders.input';
import { PointsCreateNestedManyWithoutOrderInput } from '../points/points-create-nested-many-without-order.input';
import { RefundableCreateNestedManyWithoutOrderInput } from '../refundable/refundable-create-nested-many-without-order.input';
import { IncomeCreateNestedManyWithoutOrderInput } from '../income/income-create-nested-many-without-order.input';

@InputType()
export class OrderCreateWithoutPaymentInput {

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
    note?: string;

    @Field(() => Boolean, {nullable:true})
    paymentStatus?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderSellerCreateNestedManyWithoutOrderInput, {nullable:true})
    sellers?: OrderSellerCreateNestedManyWithoutOrderInput;

    @Field(() => AddressCreateNestedOneWithoutShippingOrdersInput, {nullable:true})
    shippingAddress?: AddressCreateNestedOneWithoutShippingOrdersInput;

    @Field(() => AddressCreateNestedOneWithoutBillingOrdersInput, {nullable:true})
    billingAddress?: AddressCreateNestedOneWithoutBillingOrdersInput;

    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:true})
    user?: UserCreateNestedOneWithoutOrdersInput;

    @Field(() => PointsCreateNestedManyWithoutOrderInput, {nullable:true})
    points?: PointsCreateNestedManyWithoutOrderInput;

    @Field(() => RefundableCreateNestedManyWithoutOrderInput, {nullable:true})
    refundables?: RefundableCreateNestedManyWithoutOrderInput;

    @Field(() => IncomeCreateNestedManyWithoutOrderInput, {nullable:true})
    incomes?: IncomeCreateNestedManyWithoutOrderInput;
}
