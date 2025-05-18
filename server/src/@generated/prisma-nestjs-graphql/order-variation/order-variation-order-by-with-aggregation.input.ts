import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderVariationCountOrderByAggregateInput } from './order-variation-count-order-by-aggregate.input';
import { OrderVariationMaxOrderByAggregateInput } from './order-variation-max-order-by-aggregate.input';
import { OrderVariationMinOrderByAggregateInput } from './order-variation-min-order-by-aggregate.input';

@InputType()
export class OrderVariationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    variant?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderProductId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderVariationCountOrderByAggregateInput, {nullable:true})
    _count?: OrderVariationCountOrderByAggregateInput;

    @Field(() => OrderVariationMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderVariationMaxOrderByAggregateInput;

    @Field(() => OrderVariationMinOrderByAggregateInput, {nullable:true})
    _min?: OrderVariationMinOrderByAggregateInput;
}
