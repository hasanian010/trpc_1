import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AttributeOrderByRelationAggregateInput } from '../attribute/attribute-order-by-relation-aggregate.input';
import { ProductAttributeVariantOrderByRelationAggregateInput } from '../product-attribute-variant/product-attribute-variant-order-by-relation-aggregate.input';
import { ProductAttributeValuesOrderByRelationAggregateInput } from '../product-attribute-values/product-attribute-values-order-by-relation-aggregate.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';

@InputType()
export class ProductAttributeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AttributeOrderByRelationAggregateInput, {nullable:true})
    attributes?: AttributeOrderByRelationAggregateInput;

    @Field(() => ProductAttributeVariantOrderByRelationAggregateInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantOrderByRelationAggregateInput;

    @Field(() => ProductAttributeValuesOrderByRelationAggregateInput, {nullable:true})
    attributeValues?: ProductAttributeValuesOrderByRelationAggregateInput;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;
}
