import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OrderSellerCountOrderByAggregateInput } from './order-seller-count-order-by-aggregate.input';
import { OrderSellerAvgOrderByAggregateInput } from './order-seller-avg-order-by-aggregate.input';
import { OrderSellerMaxOrderByAggregateInput } from './order-seller-max-order-by-aggregate.input';
import { OrderSellerMinOrderByAggregateInput } from './order-seller-min-order-by-aggregate.input';
import { OrderSellerSumOrderByAggregateInput } from './order-seller-sum-order-by-aggregate.input';

@InputType()
export class OrderSellerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    cancelBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderSellerCountOrderByAggregateInput, {nullable:true})
    _count?: OrderSellerCountOrderByAggregateInput;

    @Field(() => OrderSellerAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderSellerAvgOrderByAggregateInput;

    @Field(() => OrderSellerMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderSellerMaxOrderByAggregateInput;

    @Field(() => OrderSellerMinOrderByAggregateInput, {nullable:true})
    _min?: OrderSellerMinOrderByAggregateInput;

    @Field(() => OrderSellerSumOrderByAggregateInput, {nullable:true})
    _sum?: OrderSellerSumOrderByAggregateInput;
}
