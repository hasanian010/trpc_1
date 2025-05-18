import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CouponUserCountOrderByAggregateInput } from './coupon-user-count-order-by-aggregate.input';
import { CouponUserMaxOrderByAggregateInput } from './coupon-user-max-order-by-aggregate.input';
import { CouponUserMinOrderByAggregateInput } from './coupon-user-min-order-by-aggregate.input';

@InputType()
export class CouponUserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    points?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CouponUserCountOrderByAggregateInput, {nullable:true})
    _count?: CouponUserCountOrderByAggregateInput;

    @Field(() => CouponUserMaxOrderByAggregateInput, {nullable:true})
    _max?: CouponUserMaxOrderByAggregateInput;

    @Field(() => CouponUserMinOrderByAggregateInput, {nullable:true})
    _min?: CouponUserMinOrderByAggregateInput;
}
