import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RefundableCountOrderByAggregateInput } from './refundable-count-order-by-aggregate.input';
import { RefundableAvgOrderByAggregateInput } from './refundable-avg-order-by-aggregate.input';
import { RefundableMaxOrderByAggregateInput } from './refundable-max-order-by-aggregate.input';
import { RefundableMinOrderByAggregateInput } from './refundable-min-order-by-aggregate.input';
import { RefundableSumOrderByAggregateInput } from './refundable-sum-order-by-aggregate.input';

@InputType()
export class RefundableOrderByWithAggregationInput {

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

    @Field(() => RefundableCountOrderByAggregateInput, {nullable:true})
    _count?: RefundableCountOrderByAggregateInput;

    @Field(() => RefundableAvgOrderByAggregateInput, {nullable:true})
    _avg?: RefundableAvgOrderByAggregateInput;

    @Field(() => RefundableMaxOrderByAggregateInput, {nullable:true})
    _max?: RefundableMaxOrderByAggregateInput;

    @Field(() => RefundableMinOrderByAggregateInput, {nullable:true})
    _min?: RefundableMinOrderByAggregateInput;

    @Field(() => RefundableSumOrderByAggregateInput, {nullable:true})
    _sum?: RefundableSumOrderByAggregateInput;
}
