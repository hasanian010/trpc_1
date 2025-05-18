import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PaymentInfoCountOrderByAggregateInput } from './payment-info-count-order-by-aggregate.input';
import { PaymentInfoMaxOrderByAggregateInput } from './payment-info-max-order-by-aggregate.input';
import { PaymentInfoMinOrderByAggregateInput } from './payment-info-min-order-by-aggregate.input';

@InputType()
export class PaymentInfoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    paymentMethod?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    paymentId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    provider?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PaymentInfoCountOrderByAggregateInput, {nullable:true})
    _count?: PaymentInfoCountOrderByAggregateInput;

    @Field(() => PaymentInfoMaxOrderByAggregateInput, {nullable:true})
    _max?: PaymentInfoMaxOrderByAggregateInput;

    @Field(() => PaymentInfoMinOrderByAggregateInput, {nullable:true})
    _min?: PaymentInfoMinOrderByAggregateInput;
}
