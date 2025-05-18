import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesWhereInput } from './product-attribute-values-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';
import { ProductAttributeNullableScalarRelationFilter } from '../product-attribute/product-attribute-nullable-scalar-relation-filter.input';

@InputType()
export class ProductAttributeValuesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductAttributeValuesWhereInput], {nullable:true})
    AND?: Array<ProductAttributeValuesWhereInput>;

    @Field(() => [ProductAttributeValuesWhereInput], {nullable:true})
    OR?: Array<ProductAttributeValuesWhereInput>;

    @Field(() => [ProductAttributeValuesWhereInput], {nullable:true})
    NOT?: Array<ProductAttributeValuesWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    variant?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    price?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    quantity?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

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
