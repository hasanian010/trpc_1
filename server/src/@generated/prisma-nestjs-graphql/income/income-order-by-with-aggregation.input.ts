import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { IncomeCountOrderByAggregateInput } from './income-count-order-by-aggregate.input';
import { IncomeAvgOrderByAggregateInput } from './income-avg-order-by-aggregate.input';
import { IncomeMaxOrderByAggregateInput } from './income-max-order-by-aggregate.input';
import { IncomeMinOrderByAggregateInput } from './income-min-order-by-aggregate.input';
import { IncomeSumOrderByAggregateInput } from './income-sum-order-by-aggregate.input';

@InputType()
export class IncomeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    income?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    paySuccess?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => IncomeCountOrderByAggregateInput, {nullable:true})
    _count?: IncomeCountOrderByAggregateInput;

    @Field(() => IncomeAvgOrderByAggregateInput, {nullable:true})
    _avg?: IncomeAvgOrderByAggregateInput;

    @Field(() => IncomeMaxOrderByAggregateInput, {nullable:true})
    _max?: IncomeMaxOrderByAggregateInput;

    @Field(() => IncomeMinOrderByAggregateInput, {nullable:true})
    _min?: IncomeMinOrderByAggregateInput;

    @Field(() => IncomeSumOrderByAggregateInput, {nullable:true})
    _sum?: IncomeSumOrderByAggregateInput;
}
