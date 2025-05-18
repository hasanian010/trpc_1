import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AttributeOrderByWithRelationInput } from '../attribute/attribute-order-by-with-relation.input';

@InputType()
export class ValuesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    meta?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    attributeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AttributeOrderByWithRelationInput, {nullable:true})
    attribute?: AttributeOrderByWithRelationInput;
}
