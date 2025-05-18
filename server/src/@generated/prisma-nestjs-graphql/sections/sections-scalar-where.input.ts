import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SectionsScalarWhereInput {

    @Field(() => [SectionsScalarWhereInput], {nullable:true})
    AND?: Array<SectionsScalarWhereInput>;

    @Field(() => [SectionsScalarWhereInput], {nullable:true})
    OR?: Array<SectionsScalarWhereInput>;

    @Field(() => [SectionsScalarWhereInput], {nullable:true})
    NOT?: Array<SectionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    publish?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    base?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    categoryId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
