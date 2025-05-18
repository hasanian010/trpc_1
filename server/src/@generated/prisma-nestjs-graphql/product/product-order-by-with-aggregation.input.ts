import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductCountOrderByAggregateInput } from './product-count-order-by-aggregate.input';
import { ProductMaxOrderByAggregateInput } from './product-max-order-by-aggregate.input';
import { ProductMinOrderByAggregateInput } from './product-min-order-by-aggregate.input';

@InputType()
export class ProductOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    mainCategoryId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    brandId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    unit?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minPurchase?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    refundAble?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    youtubeLink?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    flashId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isApproved?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    estimateDelivery?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    warranty?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    showStock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    disclaimer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCountOrderByAggregateInput;

    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductMaxOrderByAggregateInput;

    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: ProductMinOrderByAggregateInput;
}
