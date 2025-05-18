import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';

@InputType()
export class ProductMetaWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => [ProductMetaWhereInput], {nullable:true})
    AND?: Array<ProductMetaWhereInput>;

    @Field(() => [ProductMetaWhereInput], {nullable:true})
    OR?: Array<ProductMetaWhereInput>;

    @Field(() => [ProductMetaWhereInput], {nullable:true})
    NOT?: Array<ProductMetaWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    metaTags?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;
}
