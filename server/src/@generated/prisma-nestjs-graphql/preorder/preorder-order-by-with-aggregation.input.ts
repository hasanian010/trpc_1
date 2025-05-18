import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PreorderCountOrderByAggregateInput } from './preorder-count-order-by-aggregate.input';
import { PreorderMaxOrderByAggregateInput } from './preorder-max-order-by-aggregate.input';
import { PreorderMinOrderByAggregateInput } from './preorder-min-order-by-aggregate.input';

@InputType()
export class PreorderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productImage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productUrl?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PreorderCountOrderByAggregateInput, {nullable:true})
    _count?: PreorderCountOrderByAggregateInput;

    @Field(() => PreorderMaxOrderByAggregateInput, {nullable:true})
    _max?: PreorderMaxOrderByAggregateInput;

    @Field(() => PreorderMinOrderByAggregateInput, {nullable:true})
    _min?: PreorderMinOrderByAggregateInput;
}
