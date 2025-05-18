import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductSpecificationScalarWhereInput {

    @Field(() => [ProductSpecificationScalarWhereInput], {nullable:true})
    AND?: Array<ProductSpecificationScalarWhereInput>;

    @Field(() => [ProductSpecificationScalarWhereInput], {nullable:true})
    OR?: Array<ProductSpecificationScalarWhereInput>;

    @Field(() => [ProductSpecificationScalarWhereInput], {nullable:true})
    NOT?: Array<ProductSpecificationScalarWhereInput>;

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
}
