import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OrderProductCountOrderByAggregateInput } from './order-product-count-order-by-aggregate.input';
import { OrderProductAvgOrderByAggregateInput } from './order-product-avg-order-by-aggregate.input';
import { OrderProductMaxOrderByAggregateInput } from './order-product-max-order-by-aggregate.input';
import { OrderProductMinOrderByAggregateInput } from './order-product-min-order-by-aggregate.input';
import { OrderProductSumOrderByAggregateInput } from './order-product-sum-order-by-aggregate.input';

@InputType()
export class OrderProductOrderByWithAggregationInput {

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

    @Field(() => OrderProductCountOrderByAggregateInput, {nullable:true})
    _count?: OrderProductCountOrderByAggregateInput;

    @Field(() => OrderProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderProductAvgOrderByAggregateInput;

    @Field(() => OrderProductMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderProductMaxOrderByAggregateInput;

    @Field(() => OrderProductMinOrderByAggregateInput, {nullable:true})
    _min?: OrderProductMinOrderByAggregateInput;

    @Field(() => OrderProductSumOrderByAggregateInput, {nullable:true})
    _sum?: OrderProductSumOrderByAggregateInput;
}
