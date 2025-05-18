import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MetaCountOrderByAggregateInput } from './meta-count-order-by-aggregate.input';
import { MetaAvgOrderByAggregateInput } from './meta-avg-order-by-aggregate.input';
import { MetaMaxOrderByAggregateInput } from './meta-max-order-by-aggregate.input';
import { MetaMinOrderByAggregateInput } from './meta-min-order-by-aggregate.input';
import { MetaSumOrderByAggregateInput } from './meta-sum-order-by-aggregate.input';

@InputType()
export class MetaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    itemCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalItems?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    itemsPerPage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPages?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    currentPage?: `${SortOrder}`;

    @Field(() => MetaCountOrderByAggregateInput, {nullable:true})
    _count?: MetaCountOrderByAggregateInput;

    @Field(() => MetaAvgOrderByAggregateInput, {nullable:true})
    _avg?: MetaAvgOrderByAggregateInput;

    @Field(() => MetaMaxOrderByAggregateInput, {nullable:true})
    _max?: MetaMaxOrderByAggregateInput;

    @Field(() => MetaMinOrderByAggregateInput, {nullable:true})
    _min?: MetaMinOrderByAggregateInput;

    @Field(() => MetaSumOrderByAggregateInput, {nullable:true})
    _sum?: MetaSumOrderByAggregateInput;
}
