import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductAttributeValuesCountOrderByAggregateInput } from './product-attribute-values-count-order-by-aggregate.input';
import { ProductAttributeValuesMaxOrderByAggregateInput } from './product-attribute-values-max-order-by-aggregate.input';
import { ProductAttributeValuesMinOrderByAggregateInput } from './product-attribute-values-min-order-by-aggregate.input';

@InputType()
export class ProductAttributeValuesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    variant?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    price?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    quantity?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    productAttributeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductAttributeValuesCountOrderByAggregateInput, {nullable:true})
    _count?: ProductAttributeValuesCountOrderByAggregateInput;

    @Field(() => ProductAttributeValuesMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductAttributeValuesMaxOrderByAggregateInput;

    @Field(() => ProductAttributeValuesMinOrderByAggregateInput, {nullable:true})
    _min?: ProductAttributeValuesMinOrderByAggregateInput;
}
