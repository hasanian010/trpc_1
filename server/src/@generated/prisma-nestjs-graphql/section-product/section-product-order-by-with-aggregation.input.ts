import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SectionProductCountOrderByAggregateInput } from './section-product-count-order-by-aggregate.input';
import { SectionProductMaxOrderByAggregateInput } from './section-product-max-order-by-aggregate.input';
import { SectionProductMinOrderByAggregateInput } from './section-product-min-order-by-aggregate.input';

@InputType()
export class SectionProductOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sectionId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SectionProductCountOrderByAggregateInput, {nullable:true})
    _count?: SectionProductCountOrderByAggregateInput;

    @Field(() => SectionProductMaxOrderByAggregateInput, {nullable:true})
    _max?: SectionProductMaxOrderByAggregateInput;

    @Field(() => SectionProductMinOrderByAggregateInput, {nullable:true})
    _min?: SectionProductMinOrderByAggregateInput;
}
