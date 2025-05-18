import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ValuesCountOrderByAggregateInput } from './values-count-order-by-aggregate.input';
import { ValuesMaxOrderByAggregateInput } from './values-max-order-by-aggregate.input';
import { ValuesMinOrderByAggregateInput } from './values-min-order-by-aggregate.input';

@InputType()
export class ValuesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    meta?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    attributeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ValuesCountOrderByAggregateInput, {nullable:true})
    _count?: ValuesCountOrderByAggregateInput;

    @Field(() => ValuesMaxOrderByAggregateInput, {nullable:true})
    _max?: ValuesMaxOrderByAggregateInput;

    @Field(() => ValuesMinOrderByAggregateInput, {nullable:true})
    _min?: ValuesMinOrderByAggregateInput;
}
