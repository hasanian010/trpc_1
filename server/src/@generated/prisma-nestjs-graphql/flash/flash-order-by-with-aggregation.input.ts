import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FlashCountOrderByAggregateInput } from './flash-count-order-by-aggregate.input';
import { FlashMaxOrderByAggregateInput } from './flash-max-order-by-aggregate.input';
import { FlashMinOrderByAggregateInput } from './flash-min-order-by-aggregate.input';

@InputType()
export class FlashOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    thumb?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    start?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => FlashCountOrderByAggregateInput, {nullable:true})
    _count?: FlashCountOrderByAggregateInput;

    @Field(() => FlashMaxOrderByAggregateInput, {nullable:true})
    _max?: FlashMaxOrderByAggregateInput;

    @Field(() => FlashMinOrderByAggregateInput, {nullable:true})
    _min?: FlashMinOrderByAggregateInput;
}
