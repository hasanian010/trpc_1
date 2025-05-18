import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ShippingCountOrderByAggregateInput } from './shipping-count-order-by-aggregate.input';
import { ShippingMaxOrderByAggregateInput } from './shipping-max-order-by-aggregate.input';
import { ShippingMinOrderByAggregateInput } from './shipping-min-order-by-aggregate.input';

@InputType()
export class ShippingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rateInsideDhaka?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rateOutsideDhaka?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rateInSavar?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    estimateDelivery?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ShippingCountOrderByAggregateInput, {nullable:true})
    _count?: ShippingCountOrderByAggregateInput;

    @Field(() => ShippingMaxOrderByAggregateInput, {nullable:true})
    _max?: ShippingMaxOrderByAggregateInput;

    @Field(() => ShippingMinOrderByAggregateInput, {nullable:true})
    _min?: ShippingMinOrderByAggregateInput;
}
