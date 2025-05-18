import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SellerScalarRelationFilter } from '../seller/seller-scalar-relation-filter.input';
import { OrderProductListRelationFilter } from '../order-product/order-product-list-relation-filter.input';
import { OrderScalarRelationFilter } from '../order/order-scalar-relation-filter.input';

@InputType()
export class OrderSellerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OrderSellerWhereInput], {nullable:true})
    AND?: Array<OrderSellerWhereInput>;

    @Field(() => [OrderSellerWhereInput], {nullable:true})
    OR?: Array<OrderSellerWhereInput>;

    @Field(() => [OrderSellerWhereInput], {nullable:true})
    NOT?: Array<OrderSellerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sellerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cancelBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SellerScalarRelationFilter, {nullable:true})
    seller?: SellerScalarRelationFilter;

    @Field(() => OrderProductListRelationFilter, {nullable:true})
    products?: OrderProductListRelationFilter;

    @Field(() => OrderScalarRelationFilter, {nullable:true})
    order?: OrderScalarRelationFilter;
}
