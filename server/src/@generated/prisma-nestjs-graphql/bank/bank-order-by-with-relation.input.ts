import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SellerOrderByWithRelationInput } from '../seller/seller-order-by-with-relation.input';

@InputType()
export class BankOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    accNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    routing?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bankName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    branch?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    sellerId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SellerOrderByWithRelationInput, {nullable:true})
    seller?: SellerOrderByWithRelationInput;
}
