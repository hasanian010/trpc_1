import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MainCategoryCountOrderByAggregateInput } from './main-category-count-order-by-aggregate.input';
import { MainCategoryMaxOrderByAggregateInput } from './main-category-max-order-by-aggregate.input';
import { MainCategoryMinOrderByAggregateInput } from './main-category-min-order-by-aggregate.input';

@InputType()
export class MainCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => MainCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: MainCategoryCountOrderByAggregateInput;

    @Field(() => MainCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: MainCategoryMaxOrderByAggregateInput;

    @Field(() => MainCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: MainCategoryMinOrderByAggregateInput;
}
