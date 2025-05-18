import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderSellerListRelationFilter } from '../order-seller/order-seller-list-relation-filter.input';
import { PaymentInfoNullableScalarRelationFilter } from '../payment-info/payment-info-nullable-scalar-relation-filter.input';
import { AddressNullableScalarRelationFilter } from '../address/address-nullable-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { PointsListRelationFilter } from '../points/points-list-relation-filter.input';
import { RefundableListRelationFilter } from '../refundable/refundable-list-relation-filter.input';
import { IncomeListRelationFilter } from '../income/income-list-relation-filter.input';

@InputType()
export class OrderWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    couponDiscount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    total?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    subtotal?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    shippingFees?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    shippingCount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    estimateDelivery?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingAddressId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billingAddressId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    paymentStatus?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderSellerListRelationFilter, {nullable:true})
    sellers?: OrderSellerListRelationFilter;

    @Field(() => PaymentInfoNullableScalarRelationFilter, {nullable:true})
    payment?: PaymentInfoNullableScalarRelationFilter;

    @Field(() => AddressNullableScalarRelationFilter, {nullable:true})
    shippingAddress?: AddressNullableScalarRelationFilter;

    @Field(() => AddressNullableScalarRelationFilter, {nullable:true})
    billingAddress?: AddressNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;

    @Field(() => PointsListRelationFilter, {nullable:true})
    points?: PointsListRelationFilter;

    @Field(() => RefundableListRelationFilter, {nullable:true})
    refundables?: RefundableListRelationFilter;

    @Field(() => IncomeListRelationFilter, {nullable:true})
    incomes?: IncomeListRelationFilter;
}
