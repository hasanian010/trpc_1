import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AttributeListRelationFilter } from '../attribute/attribute-list-relation-filter.input';
import { ProductAttributeVariantListRelationFilter } from '../product-attribute-variant/product-attribute-variant-list-relation-filter.input';
import { ProductAttributeValuesListRelationFilter } from '../product-attribute-values/product-attribute-values-list-relation-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';

@InputType()
export class ProductAttributeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductAttributeWhereInput], {nullable:true})
    AND?: Array<ProductAttributeWhereInput>;

    @Field(() => [ProductAttributeWhereInput], {nullable:true})
    OR?: Array<ProductAttributeWhereInput>;

    @Field(() => [ProductAttributeWhereInput], {nullable:true})
    NOT?: Array<ProductAttributeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AttributeListRelationFilter, {nullable:true})
    attributes?: AttributeListRelationFilter;

    @Field(() => ProductAttributeVariantListRelationFilter, {nullable:true})
    selectedVariants?: ProductAttributeVariantListRelationFilter;

    @Field(() => ProductAttributeValuesListRelationFilter, {nullable:true})
    attributeValues?: ProductAttributeValuesListRelationFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;
}
