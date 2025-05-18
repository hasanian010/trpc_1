import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MainCategoryOrderByWithRelationInput } from '../main-category/main-category-order-by-with-relation.input';
import { SectionProductOrderByRelationAggregateInput } from '../section-product/section-product-order-by-relation-aggregate.input';

@InputType()
export class SectionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    publish?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => MainCategoryOrderByWithRelationInput, {nullable:true})
    category?: MainCategoryOrderByWithRelationInput;

    @Field(() => SectionProductOrderByRelationAggregateInput, {nullable:true})
    sectionProducts?: SectionProductOrderByRelationAggregateInput;
}
