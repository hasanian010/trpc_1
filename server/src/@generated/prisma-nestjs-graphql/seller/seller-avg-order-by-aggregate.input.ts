import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SellerAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    totalReview?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalRating?: `${SortOrder}`;
}
