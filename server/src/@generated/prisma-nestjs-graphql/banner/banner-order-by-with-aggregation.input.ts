import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BannerCountOrderByAggregateInput } from './banner-count-order-by-aggregate.input';
import { BannerMaxOrderByAggregateInput } from './banner-max-order-by-aggregate.input';
import { BannerMinOrderByAggregateInput } from './banner-min-order-by-aggregate.input';

@InputType()
export class BannerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    path?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BannerCountOrderByAggregateInput, {nullable:true})
    _count?: BannerCountOrderByAggregateInput;

    @Field(() => BannerMaxOrderByAggregateInput, {nullable:true})
    _max?: BannerMaxOrderByAggregateInput;

    @Field(() => BannerMinOrderByAggregateInput, {nullable:true})
    _min?: BannerMinOrderByAggregateInput;
}
