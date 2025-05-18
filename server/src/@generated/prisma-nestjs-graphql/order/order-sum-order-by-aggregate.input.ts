import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    couponDiscount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subtotal?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFees?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingCount?: `${SortOrder}`;
}
