import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SubCategoryScalarWhereInput {

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    AND?: Array<SubCategoryScalarWhereInput>;

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    OR?: Array<SubCategoryScalarWhereInput>;

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<SubCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    categoryId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
