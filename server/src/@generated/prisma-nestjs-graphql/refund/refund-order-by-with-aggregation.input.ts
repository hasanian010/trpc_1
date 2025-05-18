import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RefundCountOrderByAggregateInput } from './refund-count-order-by-aggregate.input';
import { RefundAvgOrderByAggregateInput } from './refund-avg-order-by-aggregate.input';
import { RefundMaxOrderByAggregateInput } from './refund-max-order-by-aggregate.input';
import { RefundMinOrderByAggregateInput } from './refund-min-order-by-aggregate.input';
import { RefundSumOrderByAggregateInput } from './refund-sum-order-by-aggregate.input';

@InputType()
export class RefundOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refundableId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    quantity?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    reason?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RefundCountOrderByAggregateInput, {nullable:true})
    _count?: RefundCountOrderByAggregateInput;

    @Field(() => RefundAvgOrderByAggregateInput, {nullable:true})
    _avg?: RefundAvgOrderByAggregateInput;

    @Field(() => RefundMaxOrderByAggregateInput, {nullable:true})
    _max?: RefundMaxOrderByAggregateInput;

    @Field(() => RefundMinOrderByAggregateInput, {nullable:true})
    _min?: RefundMinOrderByAggregateInput;

    @Field(() => RefundSumOrderByAggregateInput, {nullable:true})
    _sum?: RefundSumOrderByAggregateInput;
}
