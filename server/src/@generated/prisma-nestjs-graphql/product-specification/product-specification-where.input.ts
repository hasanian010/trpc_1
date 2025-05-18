import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';

@InputType()
export class ProductSpecificationWhereInput {

    @Field(() => [ProductSpecificationWhereInput], {nullable:true})
    AND?: Array<ProductSpecificationWhereInput>;

    @Field(() => [ProductSpecificationWhereInput], {nullable:true})
    OR?: Array<ProductSpecificationWhereInput>;

    @Field(() => [ProductSpecificationWhereInput], {nullable:true})
    NOT?: Array<ProductSpecificationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    value?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;
}
