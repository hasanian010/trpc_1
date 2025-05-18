import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BankNullableScalarRelationFilter } from '../bank/bank-nullable-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { OrderSellerListRelationFilter } from '../order-seller/order-seller-list-relation-filter.input';
import { RefundableListRelationFilter } from '../refundable/refundable-list-relation-filter.input';
import { WithdrawListRelationFilter } from '../withdraw/withdraw-list-relation-filter.input';
import { IncomeListRelationFilter } from '../income/income-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';

@InputType()
export class SellerWhereInput {

    @Field(() => [SellerWhereInput], {nullable:true})
    AND?: Array<SellerWhereInput>;

    @Field(() => [SellerWhereInput], {nullable:true})
    OR?: Array<SellerWhereInput>;

    @Field(() => [SellerWhereInput], {nullable:true})
    NOT?: Array<SellerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shopName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logo?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    banner?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    metaTitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    metaDescription?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBanned?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalReview?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalRating?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BankNullableScalarRelationFilter, {nullable:true})
    bank?: BankNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => OrderSellerListRelationFilter, {nullable:true})
    orderSellers?: OrderSellerListRelationFilter;

    @Field(() => RefundableListRelationFilter, {nullable:true})
    refundables?: RefundableListRelationFilter;

    @Field(() => WithdrawListRelationFilter, {nullable:true})
    withdraws?: WithdrawListRelationFilter;

    @Field(() => IncomeListRelationFilter, {nullable:true})
    incomes?: IncomeListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;
}
