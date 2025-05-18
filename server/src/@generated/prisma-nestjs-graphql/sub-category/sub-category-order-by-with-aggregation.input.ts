import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubCategoryCountOrderByAggregateInput } from './sub-category-count-order-by-aggregate.input';
import { SubCategoryMaxOrderByAggregateInput } from './sub-category-max-order-by-aggregate.input';
import { SubCategoryMinOrderByAggregateInput } from './sub-category-min-order-by-aggregate.input';

@InputType()
export class SubCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SubCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: SubCategoryCountOrderByAggregateInput;

    @Field(() => SubCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: SubCategoryMaxOrderByAggregateInput;

    @Field(() => SubCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: SubCategoryMinOrderByAggregateInput;
}
