import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CouponAdminCountOrderByAggregateInput } from './coupon-admin-count-order-by-aggregate.input';
import { CouponAdminMaxOrderByAggregateInput } from './coupon-admin-max-order-by-aggregate.input';
import { CouponAdminMinOrderByAggregateInput } from './coupon-admin-min-order-by-aggregate.input';

@InputType()
export class CouponAdminOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minimumPurchase?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CouponAdminCountOrderByAggregateInput, {nullable:true})
    _count?: CouponAdminCountOrderByAggregateInput;

    @Field(() => CouponAdminMaxOrderByAggregateInput, {nullable:true})
    _max?: CouponAdminMaxOrderByAggregateInput;

    @Field(() => CouponAdminMinOrderByAggregateInput, {nullable:true})
    _min?: CouponAdminMinOrderByAggregateInput;
}
