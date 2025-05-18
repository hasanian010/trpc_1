import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AddressCountOrderByAggregateInput } from './address-count-order-by-aggregate.input';
import { AddressMaxOrderByAggregateInput } from './address-max-order-by-aggregate.input';
import { AddressMinOrderByAggregateInput } from './address-min-order-by-aggregate.input';

@InputType()
export class AddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    area?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    postal?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AddressCountOrderByAggregateInput, {nullable:true})
    _count?: AddressCountOrderByAggregateInput;

    @Field(() => AddressMaxOrderByAggregateInput, {nullable:true})
    _max?: AddressMaxOrderByAggregateInput;

    @Field(() => AddressMinOrderByAggregateInput, {nullable:true})
    _min?: AddressMinOrderByAggregateInput;
}
