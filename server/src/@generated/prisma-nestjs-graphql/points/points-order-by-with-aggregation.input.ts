import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PointsCountOrderByAggregateInput } from './points-count-order-by-aggregate.input';
import { PointsAvgOrderByAggregateInput } from './points-avg-order-by-aggregate.input';
import { PointsMaxOrderByAggregateInput } from './points-max-order-by-aggregate.input';
import { PointsMinOrderByAggregateInput } from './points-min-order-by-aggregate.input';
import { PointsSumOrderByAggregateInput } from './points-sum-order-by-aggregate.input';

@InputType()
export class PointsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    points?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PointsCountOrderByAggregateInput, {nullable:true})
    _count?: PointsCountOrderByAggregateInput;

    @Field(() => PointsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PointsAvgOrderByAggregateInput;

    @Field(() => PointsMaxOrderByAggregateInput, {nullable:true})
    _max?: PointsMaxOrderByAggregateInput;

    @Field(() => PointsMinOrderByAggregateInput, {nullable:true})
    _min?: PointsMinOrderByAggregateInput;

    @Field(() => PointsSumOrderByAggregateInput, {nullable:true})
    _sum?: PointsSumOrderByAggregateInput;
}
