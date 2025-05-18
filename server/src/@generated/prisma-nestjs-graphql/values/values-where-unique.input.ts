import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesWhereInput } from './values-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AttributeScalarRelationFilter } from '../attribute/attribute-scalar-relation-filter.input';

@InputType()
export class ValuesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ValuesWhereInput], {nullable:true})
    AND?: Array<ValuesWhereInput>;

    @Field(() => [ValuesWhereInput], {nullable:true})
    OR?: Array<ValuesWhereInput>;

    @Field(() => [ValuesWhereInput], {nullable:true})
    NOT?: Array<ValuesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    meta?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    attributeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AttributeScalarRelationFilter, {nullable:true})
    attribute?: AttributeScalarRelationFilter;
}
