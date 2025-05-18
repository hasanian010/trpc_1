import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductAttributeVariantScalarWhereInput {

    @Field(() => [ProductAttributeVariantScalarWhereInput], {nullable:true})
    AND?: Array<ProductAttributeVariantScalarWhereInput>;

    @Field(() => [ProductAttributeVariantScalarWhereInput], {nullable:true})
    OR?: Array<ProductAttributeVariantScalarWhereInput>;

    @Field(() => [ProductAttributeVariantScalarWhereInput], {nullable:true})
    NOT?: Array<ProductAttributeVariantScalarWhereInput>;

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
}
