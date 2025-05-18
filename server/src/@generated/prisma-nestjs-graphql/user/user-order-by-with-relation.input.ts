import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProviderOrderByRelationAggregateInput } from '../provider/provider-order-by-relation-aggregate.input';
import { AddressOrderByRelationAggregateInput } from '../address/address-order-by-relation-aggregate.input';
import { SellerOrderByRelationAggregateInput } from '../seller/seller-order-by-relation-aggregate.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';
import { PointsOrderByRelationAggregateInput } from '../points/points-order-by-relation-aggregate.input';
import { UserPointsOrderByWithRelationInput } from '../user-points/user-points-order-by-with-relation.input';
import { RefundOrderByRelationAggregateInput } from '../refund/refund-order-by-relation-aggregate.input';
import { RefundableOrderByRelationAggregateInput } from '../refundable/refundable-order-by-relation-aggregate.input';
import { WithdrawOrderByRelationAggregateInput } from '../withdraw/withdraw-order-by-relation-aggregate.input';
import { WishlistOrderByRelationAggregateInput } from '../wishlist/wishlist-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    otp?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    newPhone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isBanned?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProviderOrderByRelationAggregateInput, {nullable:true})
    providers?: ProviderOrderByRelationAggregateInput;

    @Field(() => AddressOrderByRelationAggregateInput, {nullable:true})
    addresses?: AddressOrderByRelationAggregateInput;

    @Field(() => SellerOrderByRelationAggregateInput, {nullable:true})
    sellers?: SellerOrderByRelationAggregateInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    orders?: OrderOrderByRelationAggregateInput;

    @Field(() => PointsOrderByRelationAggregateInput, {nullable:true})
    points?: PointsOrderByRelationAggregateInput;

    @Field(() => UserPointsOrderByWithRelationInput, {nullable:true})
    userPoints?: UserPointsOrderByWithRelationInput;

    @Field(() => RefundOrderByRelationAggregateInput, {nullable:true})
    refunds?: RefundOrderByRelationAggregateInput;

    @Field(() => RefundableOrderByRelationAggregateInput, {nullable:true})
    refundables?: RefundableOrderByRelationAggregateInput;

    @Field(() => WithdrawOrderByRelationAggregateInput, {nullable:true})
    releasedWithdraws?: WithdrawOrderByRelationAggregateInput;

    @Field(() => WishlistOrderByRelationAggregateInput, {nullable:true})
    wishlists?: WishlistOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;
}
