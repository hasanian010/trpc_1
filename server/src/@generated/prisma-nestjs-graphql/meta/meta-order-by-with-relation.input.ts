import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MetaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    itemCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalItems?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    itemsPerPage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPages?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    currentPage?: `${SortOrder}`;
}
