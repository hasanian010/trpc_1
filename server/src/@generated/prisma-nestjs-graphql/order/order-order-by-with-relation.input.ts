import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OrderSellerOrderByRelationAggregateInput } from '../order-seller/order-seller-order-by-relation-aggregate.input';
import { PaymentInfoOrderByWithRelationInput } from '../payment-info/payment-info-order-by-with-relation.input';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PointsOrderByRelationAggregateInput } from '../points/points-order-by-relation-aggregate.input';
import { RefundableOrderByRelationAggregateInput } from '../refundable/refundable-order-by-relation-aggregate.input';
import { IncomeOrderByRelationAggregateInput } from '../income/income-order-by-relation-aggregate.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    couponDiscount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subtotal?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFees?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    estimateDelivery?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    shippingAddressId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    billingAddressId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    paymentStatus?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderSellerOrderByRelationAggregateInput, {nullable:true})
    sellers?: OrderSellerOrderByRelationAggregateInput;

    @Field(() => PaymentInfoOrderByWithRelationInput, {nullable:true})
    payment?: PaymentInfoOrderByWithRelationInput;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    shippingAddress?: AddressOrderByWithRelationInput;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    billingAddress?: AddressOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => PointsOrderByRelationAggregateInput, {nullable:true})
    points?: PointsOrderByRelationAggregateInput;

    @Field(() => RefundableOrderByRelationAggregateInput, {nullable:true})
    refundables?: RefundableOrderByRelationAggregateInput;

    @Field(() => IncomeOrderByRelationAggregateInput, {nullable:true})
    incomes?: IncomeOrderByRelationAggregateInput;
}
