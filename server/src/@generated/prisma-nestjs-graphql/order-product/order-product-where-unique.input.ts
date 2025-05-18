import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';
import { OrderVariationListRelationFilter } from '../order-variation/order-variation-list-relation-filter.input';
import { OrderSellerNullableScalarRelationFilter } from '../order-seller/order-seller-nullable-scalar-relation-filter.input';
import { RefundableListRelationFilter } from '../refundable/refundable-list-relation-filter.input';

@InputType()
export class OrderProductWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OrderProductWhereInput], {nullable:true})
    AND?: Array<OrderProductWhereInput>;

    @Field(() => [OrderProductWhereInput], {nullable:true})
    OR?: Array<OrderProductWhereInput>;

    @Field(() => [OrderProductWhereInput], {nullable:true})
    NOT?: Array<OrderProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    tax?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderSellerId?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    refundableIds?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;

    @Field(() => OrderVariationListRelationFilter, {nullable:true})
    variations?: OrderVariationListRelationFilter;

    @Field(() => OrderSellerNullableScalarRelationFilter, {nullable:true})
    orderSeller?: OrderSellerNullableScalarRelationFilter;

    @Field(() => RefundableListRelationFilter, {nullable:true})
    refundables?: RefundableListRelationFilter;
}
