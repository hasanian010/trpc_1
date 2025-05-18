import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductAttributeVariantCountOrderByAggregateInput } from './product-attribute-variant-count-order-by-aggregate.input';
import { ProductAttributeVariantMaxOrderByAggregateInput } from './product-attribute-variant-max-order-by-aggregate.input';
import { ProductAttributeVariantMinOrderByAggregateInput } from './product-attribute-variant-min-order-by-aggregate.input';

@InputType()
export class ProductAttributeVariantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selected?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    productAttributeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductAttributeVariantCountOrderByAggregateInput, {nullable:true})
    _count?: ProductAttributeVariantCountOrderByAggregateInput;

    @Field(() => ProductAttributeVariantMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductAttributeVariantMaxOrderByAggregateInput;

    @Field(() => ProductAttributeVariantMinOrderByAggregateInput, {nullable:true})
    _min?: ProductAttributeVariantMinOrderByAggregateInput;
}
