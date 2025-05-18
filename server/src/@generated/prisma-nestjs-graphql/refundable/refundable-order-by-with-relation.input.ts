import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { OrderProductOrderByWithRelationInput } from '../order-product/order-product-order-by-with-relation.input';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';
import { OrderVariationOrderByRelationAggregateInput } from '../order-variation/order-variation-order-by-relation-aggregate.input';
import { SellerOrderByWithRelationInput } from '../seller/seller-order-by-with-relation.input';
import { RefundOrderByRelationAggregateInput } from '../refund/refund-order-by-relation-aggregate.input';

@InputType()
export class RefundableOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    productId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    orderProductId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    orderId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    quantity?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sellerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    couponDiscount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => OrderProductOrderByWithRelationInput, {nullable:true})
    orderProduct?: OrderProductOrderByWithRelationInput;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => OrderVariationOrderByRelationAggregateInput, {nullable:true})
    variations?: OrderVariationOrderByRelationAggregateInput;

    @Field(() => SellerOrderByWithRelationInput, {nullable:true})
    seller?: SellerOrderByWithRelationInput;

    @Field(() => RefundOrderByRelationAggregateInput, {nullable:true})
    refunds?: RefundOrderByRelationAggregateInput;
}
