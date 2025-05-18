import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SectionsCountOrderByAggregateInput } from './sections-count-order-by-aggregate.input';
import { SectionsMaxOrderByAggregateInput } from './sections-max-order-by-aggregate.input';
import { SectionsMinOrderByAggregateInput } from './sections-min-order-by-aggregate.input';

@InputType()
export class SectionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    publish?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SectionsCountOrderByAggregateInput, {nullable:true})
    _count?: SectionsCountOrderByAggregateInput;

    @Field(() => SectionsMaxOrderByAggregateInput, {nullable:true})
    _max?: SectionsMaxOrderByAggregateInput;

    @Field(() => SectionsMinOrderByAggregateInput, {nullable:true})
    _min?: SectionsMinOrderByAggregateInput;
}
