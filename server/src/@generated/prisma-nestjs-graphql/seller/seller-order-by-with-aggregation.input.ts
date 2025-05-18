import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SellerCountOrderByAggregateInput } from './seller-count-order-by-aggregate.input';
import { SellerAvgOrderByAggregateInput } from './seller-avg-order-by-aggregate.input';
import { SellerMaxOrderByAggregateInput } from './seller-max-order-by-aggregate.input';
import { SellerMinOrderByAggregateInput } from './seller-min-order-by-aggregate.input';
import { SellerSumOrderByAggregateInput } from './seller-sum-order-by-aggregate.input';

@InputType()
export class SellerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shopName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    banner?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    metaTitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metaDescription?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isBanned?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalReview?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalRating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SellerCountOrderByAggregateInput, {nullable:true})
    _count?: SellerCountOrderByAggregateInput;

    @Field(() => SellerAvgOrderByAggregateInput, {nullable:true})
    _avg?: SellerAvgOrderByAggregateInput;

    @Field(() => SellerMaxOrderByAggregateInput, {nullable:true})
    _max?: SellerMaxOrderByAggregateInput;

    @Field(() => SellerMinOrderByAggregateInput, {nullable:true})
    _min?: SellerMinOrderByAggregateInput;

    @Field(() => SellerSumOrderByAggregateInput, {nullable:true})
    _sum?: SellerSumOrderByAggregateInput;
}
