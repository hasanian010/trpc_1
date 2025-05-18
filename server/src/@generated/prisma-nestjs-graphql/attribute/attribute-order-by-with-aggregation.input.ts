import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AttributeCountOrderByAggregateInput } from './attribute-count-order-by-aggregate.input';
import { AttributeMaxOrderByAggregateInput } from './attribute-max-order-by-aggregate.input';
import { AttributeMinOrderByAggregateInput } from './attribute-min-order-by-aggregate.input';

@InputType()
export class AttributeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AttributeCountOrderByAggregateInput, {nullable:true})
    _count?: AttributeCountOrderByAggregateInput;

    @Field(() => AttributeMaxOrderByAggregateInput, {nullable:true})
    _max?: AttributeMaxOrderByAggregateInput;

    @Field(() => AttributeMinOrderByAggregateInput, {nullable:true})
    _min?: AttributeMinOrderByAggregateInput;
}
