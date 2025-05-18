import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductSpecificationCountOrderByAggregateInput } from './product-specification-count-order-by-aggregate.input';
import { ProductSpecificationMaxOrderByAggregateInput } from './product-specification-max-order-by-aggregate.input';
import { ProductSpecificationMinOrderByAggregateInput } from './product-specification-min-order-by-aggregate.input';

@InputType()
export class ProductSpecificationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    value?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductSpecificationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductSpecificationCountOrderByAggregateInput;

    @Field(() => ProductSpecificationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductSpecificationMaxOrderByAggregateInput;

    @Field(() => ProductSpecificationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductSpecificationMinOrderByAggregateInput;
}
