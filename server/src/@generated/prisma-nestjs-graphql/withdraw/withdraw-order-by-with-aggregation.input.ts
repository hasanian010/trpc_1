import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { WithdrawCountOrderByAggregateInput } from './withdraw-count-order-by-aggregate.input';
import { WithdrawAvgOrderByAggregateInput } from './withdraw-avg-order-by-aggregate.input';
import { WithdrawMaxOrderByAggregateInput } from './withdraw-max-order-by-aggregate.input';
import { WithdrawMinOrderByAggregateInput } from './withdraw-min-order-by-aggregate.input';
import { WithdrawSumOrderByAggregateInput } from './withdraw-sum-order-by-aggregate.input';

@InputType()
export class WithdrawOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    releasedById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    method?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => WithdrawCountOrderByAggregateInput, {nullable:true})
    _count?: WithdrawCountOrderByAggregateInput;

    @Field(() => WithdrawAvgOrderByAggregateInput, {nullable:true})
    _avg?: WithdrawAvgOrderByAggregateInput;

    @Field(() => WithdrawMaxOrderByAggregateInput, {nullable:true})
    _max?: WithdrawMaxOrderByAggregateInput;

    @Field(() => WithdrawMinOrderByAggregateInput, {nullable:true})
    _min?: WithdrawMinOrderByAggregateInput;

    @Field(() => WithdrawSumOrderByAggregateInput, {nullable:true})
    _sum?: WithdrawSumOrderByAggregateInput;
}
