import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { OrderVariationOrderByRelationAggregateInput } from '../order-variation/order-variation-order-by-relation-aggregate.input';
import { OrderSellerOrderByWithRelationInput } from '../order-seller/order-seller-order-by-with-relation.input';
import { RefundableOrderByRelationAggregateInput } from '../refundable/refundable-order-by-relation-aggregate.input';

@InputType()
export class OrderProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    orderSellerId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    refundableIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => OrderVariationOrderByRelationAggregateInput, {nullable:true})
    variations?: OrderVariationOrderByRelationAggregateInput;

    @Field(() => OrderSellerOrderByWithRelationInput, {nullable:true})
    orderSeller?: OrderSellerOrderByWithRelationInput;

    @Field(() => RefundableOrderByRelationAggregateInput, {nullable:true})
    refundables?: RefundableOrderByRelationAggregateInput;
}
