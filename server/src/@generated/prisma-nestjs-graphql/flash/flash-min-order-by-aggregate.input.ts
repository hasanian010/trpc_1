import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FlashMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    thumb?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    start?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
