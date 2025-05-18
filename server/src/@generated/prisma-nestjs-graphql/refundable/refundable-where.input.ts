import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { ProductNullableScalarRelationFilter } from '../product/product-nullable-scalar-relation-filter.input';
import { OrderProductNullableScalarRelationFilter } from '../order-product/order-product-nullable-scalar-relation-filter.input';
import { OrderNullableScalarRelationFilter } from '../order/order-nullable-scalar-relation-filter.input';
import { OrderVariationListRelationFilter } from '../order-variation/order-variation-list-relation-filter.input';
import { SellerNullableScalarRelationFilter } from '../seller/seller-nullable-scalar-relation-filter.input';
import { RefundListRelationFilter } from '../refund/refund-list-relation-filter.input';

@InputType()
export class RefundableWhereInput {

    @Field(() => [RefundableWhereInput], {nullable:true})
    AND?: Array<RefundableWhereInput>;

    @Field(() => [RefundableWhereInput], {nullable:true})
    OR?: Array<RefundableWhereInput>;

    @Field(() => [RefundableWhereInput], {nullable:true})
    NOT?: Array<RefundableWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderProductId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    quantity?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sellerId?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    couponDiscount?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    amount?: FloatNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;

    @Field(() => ProductNullableScalarRelationFilter, {nullable:true})
    product?: ProductNullableScalarRelationFilter;

    @Field(() => OrderProductNullableScalarRelationFilter, {nullable:true})
    orderProduct?: OrderProductNullableScalarRelationFilter;

    @Field(() => OrderNullableScalarRelationFilter, {nullable:true})
    order?: OrderNullableScalarRelationFilter;

    @Field(() => OrderVariationListRelationFilter, {nullable:true})
    variations?: OrderVariationListRelationFilter;

    @Field(() => SellerNullableScalarRelationFilter, {nullable:true})
    seller?: SellerNullableScalarRelationFilter;

    @Field(() => RefundListRelationFilter, {nullable:true})
    refunds?: RefundListRelationFilter;
}
