import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserPointsCountOrderByAggregateInput } from './user-points-count-order-by-aggregate.input';
import { UserPointsAvgOrderByAggregateInput } from './user-points-avg-order-by-aggregate.input';
import { UserPointsMaxOrderByAggregateInput } from './user-points-max-order-by-aggregate.input';
import { UserPointsMinOrderByAggregateInput } from './user-points-min-order-by-aggregate.input';
import { UserPointsSumOrderByAggregateInput } from './user-points-sum-order-by-aggregate.input';

@InputType()
export class UserPointsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    points?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserPointsCountOrderByAggregateInput, {nullable:true})
    _count?: UserPointsCountOrderByAggregateInput;

    @Field(() => UserPointsAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserPointsAvgOrderByAggregateInput;

    @Field(() => UserPointsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserPointsMaxOrderByAggregateInput;

    @Field(() => UserPointsMinOrderByAggregateInput, {nullable:true})
    _min?: UserPointsMinOrderByAggregateInput;

    @Field(() => UserPointsSumOrderByAggregateInput, {nullable:true})
    _sum?: UserPointsSumOrderByAggregateInput;
}
