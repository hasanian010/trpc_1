import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserPointsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    points?: `${SortOrder}`;
}
