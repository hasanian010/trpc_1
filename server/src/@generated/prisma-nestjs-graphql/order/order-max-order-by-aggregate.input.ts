import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

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

    @Field(() => SortOrder, {nullable:true})
    estimateDelivery?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingAddressId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    billingAddressId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    note?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentStatus?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
