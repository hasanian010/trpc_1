import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductMetaCountOrderByAggregateInput } from './product-meta-count-order-by-aggregate.input';
import { ProductMetaMaxOrderByAggregateInput } from './product-meta-max-order-by-aggregate.input';
import { ProductMetaMinOrderByAggregateInput } from './product-meta-min-order-by-aggregate.input';

@InputType()
export class ProductMetaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    metaTags?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductMetaCountOrderByAggregateInput, {nullable:true})
    _count?: ProductMetaCountOrderByAggregateInput;

    @Field(() => ProductMetaMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductMetaMaxOrderByAggregateInput;

    @Field(() => ProductMetaMinOrderByAggregateInput, {nullable:true})
    _min?: ProductMetaMinOrderByAggregateInput;
}
