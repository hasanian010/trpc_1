import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TagCountOrderByAggregateInput } from './tag-count-order-by-aggregate.input';
import { TagMaxOrderByAggregateInput } from './tag-max-order-by-aggregate.input';
import { TagMinOrderByAggregateInput } from './tag-min-order-by-aggregate.input';

@InputType()
export class TagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => TagCountOrderByAggregateInput, {nullable:true})
    _count?: TagCountOrderByAggregateInput;

    @Field(() => TagMaxOrderByAggregateInput, {nullable:true})
    _max?: TagMaxOrderByAggregateInput;

    @Field(() => TagMinOrderByAggregateInput, {nullable:true})
    _min?: TagMinOrderByAggregateInput;
}
