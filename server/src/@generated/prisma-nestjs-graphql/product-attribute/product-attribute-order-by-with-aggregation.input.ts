import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductAttributeCountOrderByAggregateInput } from './product-attribute-count-order-by-aggregate.input';
import { ProductAttributeMaxOrderByAggregateInput } from './product-attribute-max-order-by-aggregate.input';
import { ProductAttributeMinOrderByAggregateInput } from './product-attribute-min-order-by-aggregate.input';

@InputType()
export class ProductAttributeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductAttributeCountOrderByAggregateInput, {nullable:true})
    _count?: ProductAttributeCountOrderByAggregateInput;

    @Field(() => ProductAttributeMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductAttributeMaxOrderByAggregateInput;

    @Field(() => ProductAttributeMinOrderByAggregateInput, {nullable:true})
    _min?: ProductAttributeMinOrderByAggregateInput;
}
