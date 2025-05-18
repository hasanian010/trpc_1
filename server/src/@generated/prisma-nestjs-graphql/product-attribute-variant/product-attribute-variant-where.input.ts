import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';
import { ProductAttributeNullableScalarRelationFilter } from '../product-attribute/product-attribute-nullable-scalar-relation-filter.input';

@InputType()
export class ProductAttributeVariantWhereInput {

    @Field(() => [ProductAttributeVariantWhereInput], {nullable:true})
    AND?: Array<ProductAttributeVariantWhereInput>;

    @Field(() => [ProductAttributeVariantWhereInput], {nullable:true})
    OR?: Array<ProductAttributeVariantWhereInput>;

    @Field(() => [ProductAttributeVariantWhereInput], {nullable:true})
    NOT?: Array<ProductAttributeVariantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    selected?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productAttributeId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;

    @Field(() => ProductAttributeNullableScalarRelationFilter, {nullable:true})
    productAttribute?: ProductAttributeNullableScalarRelationFilter;
}
