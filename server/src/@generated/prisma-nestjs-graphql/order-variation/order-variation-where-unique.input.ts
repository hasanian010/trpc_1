import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationWhereInput } from './order-variation-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderProductScalarRelationFilter } from '../order-product/order-product-scalar-relation-filter.input';
import { RefundableListRelationFilter } from '../refundable/refundable-list-relation-filter.input';

@InputType()
export class OrderVariationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OrderVariationWhereInput], {nullable:true})
    AND?: Array<OrderVariationWhereInput>;

    @Field(() => [OrderVariationWhereInput], {nullable:true})
    OR?: Array<OrderVariationWhereInput>;

    @Field(() => [OrderVariationWhereInput], {nullable:true})
    NOT?: Array<OrderVariationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    variant?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderProductId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderProductScalarRelationFilter, {nullable:true})
    orderProduct?: OrderProductScalarRelationFilter;

    @Field(() => RefundableListRelationFilter, {nullable:true})
    refundables?: RefundableListRelationFilter;
}
