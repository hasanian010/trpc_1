import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BankOrderByWithRelationInput } from '../bank/bank-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { OrderSellerOrderByRelationAggregateInput } from '../order-seller/order-seller-order-by-relation-aggregate.input';
import { RefundableOrderByRelationAggregateInput } from '../refundable/refundable-order-by-relation-aggregate.input';
import { WithdrawOrderByRelationAggregateInput } from '../withdraw/withdraw-order-by-relation-aggregate.input';
import { IncomeOrderByRelationAggregateInput } from '../income/income-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';

@InputType()
export class SellerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shopName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    banner?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    metaTitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metaDescription?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isBanned?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalReview?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalRating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BankOrderByWithRelationInput, {nullable:true})
    bank?: BankOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => OrderSellerOrderByRelationAggregateInput, {nullable:true})
    orderSellers?: OrderSellerOrderByRelationAggregateInput;

    @Field(() => RefundableOrderByRelationAggregateInput, {nullable:true})
    refundables?: RefundableOrderByRelationAggregateInput;

    @Field(() => WithdrawOrderByRelationAggregateInput, {nullable:true})
    withdraws?: WithdrawOrderByRelationAggregateInput;

    @Field(() => IncomeOrderByRelationAggregateInput, {nullable:true})
    incomes?: IncomeOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;
}
