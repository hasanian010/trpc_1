import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MainCategoryOrderByWithRelationInput } from '../main-category/main-category-order-by-with-relation.input';
import { SubCategoryOrderByRelationAggregateInput } from '../sub-category/sub-category-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mainCategoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => MainCategoryOrderByWithRelationInput, {nullable:true})
    mainCategory?: MainCategoryOrderByWithRelationInput;

    @Field(() => SubCategoryOrderByRelationAggregateInput, {nullable:true})
    subCategories?: SubCategoryOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;
}
