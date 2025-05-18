import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BankCountOrderByAggregateInput } from './bank-count-order-by-aggregate.input';
import { BankMaxOrderByAggregateInput } from './bank-max-order-by-aggregate.input';
import { BankMinOrderByAggregateInput } from './bank-min-order-by-aggregate.input';

@InputType()
export class BankOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    accNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    routing?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bankName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    branch?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    sellerId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BankCountOrderByAggregateInput, {nullable:true})
    _count?: BankCountOrderByAggregateInput;

    @Field(() => BankMaxOrderByAggregateInput, {nullable:true})
    _max?: BankMaxOrderByAggregateInput;

    @Field(() => BankMinOrderByAggregateInput, {nullable:true})
    _min?: BankMinOrderByAggregateInput;
}
