import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ValuesOrderByRelationAggregateInput } from '../values/values-order-by-relation-aggregate.input';
import { ProductAttributeOrderByRelationAggregateInput } from '../product-attribute/product-attribute-order-by-relation-aggregate.input';

@InputType()
export class AttributeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ValuesOrderByRelationAggregateInput, {nullable:true})
    values?: ValuesOrderByRelationAggregateInput;

    @Field(() => ProductAttributeOrderByRelationAggregateInput, {nullable:true})
    productAttributes?: ProductAttributeOrderByRelationAggregateInput;
}
