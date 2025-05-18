import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SellerOrderByWithRelationInput } from '../seller/seller-order-by-with-relation.input';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';

@InputType()
export class IncomeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    income?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    paySuccess?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SellerOrderByWithRelationInput, {nullable:true})
    seller?: SellerOrderByWithRelationInput;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;
}
