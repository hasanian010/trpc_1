import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ValuesScalarWhereInput {

    @Field(() => [ValuesScalarWhereInput], {nullable:true})
    AND?: Array<ValuesScalarWhereInput>;

    @Field(() => [ValuesScalarWhereInput], {nullable:true})
    OR?: Array<ValuesScalarWhereInput>;

    @Field(() => [ValuesScalarWhereInput], {nullable:true})
    NOT?: Array<ValuesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
