import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlatformCountOrderByAggregateInput } from './platform-count-order-by-aggregate.input';
import { PlatformMaxOrderByAggregateInput } from './platform-max-order-by-aggregate.input';
import { PlatformMinOrderByAggregateInput } from './platform-min-order-by-aggregate.input';

@InputType()
export class PlatformOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    charge?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PlatformCountOrderByAggregateInput, {nullable:true})
    _count?: PlatformCountOrderByAggregateInput;

    @Field(() => PlatformMaxOrderByAggregateInput, {nullable:true})
    _max?: PlatformMaxOrderByAggregateInput;

    @Field(() => PlatformMinOrderByAggregateInput, {nullable:true})
    _min?: PlatformMinOrderByAggregateInput;
}
