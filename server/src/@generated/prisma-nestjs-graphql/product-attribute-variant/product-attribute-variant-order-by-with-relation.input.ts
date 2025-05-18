import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { ProductAttributeOrderByWithRelationInput } from '../product-attribute/product-attribute-order-by-with-relation.input';

@InputType()
export class ProductAttributeVariantOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selected?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    productAttributeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => ProductAttributeOrderByWithRelationInput, {nullable:true})
    productAttribute?: ProductAttributeOrderByWithRelationInput;
}
