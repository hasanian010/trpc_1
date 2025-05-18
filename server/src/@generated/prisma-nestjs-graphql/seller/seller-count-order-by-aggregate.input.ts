import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SellerCountOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    metaTitle?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    metaDescription?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isBanned?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalReview?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalRating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
