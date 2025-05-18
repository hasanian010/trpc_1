import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductAttributeValuesScalarWhereInput {

    @Field(() => [ProductAttributeValuesScalarWhereInput], {nullable:true})
    AND?: Array<ProductAttributeValuesScalarWhereInput>;

    @Field(() => [ProductAttributeValuesScalarWhereInput], {nullable:true})
    OR?: Array<ProductAttributeValuesScalarWhereInput>;

    @Field(() => [ProductAttributeValuesScalarWhereInput], {nullable:true})
    NOT?: Array<ProductAttributeValuesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
