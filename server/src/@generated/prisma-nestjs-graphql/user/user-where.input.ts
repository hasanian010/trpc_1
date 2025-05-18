import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProviderListRelationFilter } from '../provider/provider-list-relation-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';
import { SellerListRelationFilter } from '../seller/seller-list-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';
import { PointsListRelationFilter } from '../points/points-list-relation-filter.input';
import { UserPointsNullableScalarRelationFilter } from '../user-points/user-points-nullable-scalar-relation-filter.input';
import { RefundListRelationFilter } from '../refund/refund-list-relation-filter.input';
import { RefundableListRelationFilter } from '../refundable/refundable-list-relation-filter.input';
import { WithdrawListRelationFilter } from '../withdraw/withdraw-list-relation-filter.input';
import { WishlistListRelationFilter } from '../wishlist/wishlist-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    otp?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    newPhone?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBanned?: BoolFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProviderListRelationFilter, {nullable:true})
    providers?: ProviderListRelationFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    addresses?: AddressListRelationFilter;

    @Field(() => SellerListRelationFilter, {nullable:true})
    sellers?: SellerListRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: OrderListRelationFilter;

    @Field(() => PointsListRelationFilter, {nullable:true})
    points?: PointsListRelationFilter;

    @Field(() => UserPointsNullableScalarRelationFilter, {nullable:true})
    userPoints?: UserPointsNullableScalarRelationFilter;

    @Field(() => RefundListRelationFilter, {nullable:true})
    refunds?: RefundListRelationFilter;

    @Field(() => RefundableListRelationFilter, {nullable:true})
    refundables?: RefundableListRelationFilter;

    @Field(() => WithdrawListRelationFilter, {nullable:true})
    releasedWithdraws?: WithdrawListRelationFilter;

    @Field(() => WishlistListRelationFilter, {nullable:true})
    wishlists?: WishlistListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;
}
