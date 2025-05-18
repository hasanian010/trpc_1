import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BrandCountOrderByAggregateInput } from './brand-count-order-by-aggregate.input';
import { BrandMaxOrderByAggregateInput } from './brand-max-order-by-aggregate.input';
import { BrandMinOrderByAggregateInput } from './brand-min-order-by-aggregate.input';

@InputType()
export class BrandOrderByWithAggregationInput {

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

    @Field(() => BrandCountOrderByAggregateInput, {nullable:true})
    _count?: BrandCountOrderByAggregateInput;

    @Field(() => BrandMaxOrderByAggregateInput, {nullable:true})
    _max?: BrandMaxOrderByAggregateInput;

    @Field(() => BrandMinOrderByAggregateInput, {nullable:true})
    _min?: BrandMinOrderByAggregateInput;
}
