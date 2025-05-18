import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SettingsWhereInput {

    @Field(() => [SettingsWhereInput], {nullable:true})
    AND?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    OR?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    NOT?: Array<SettingsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    siteTitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slogan?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    metaTitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    metaDescription?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    metaTag?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    siteUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ogTitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ogDescription?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ogImage?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    corporateOffice?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    headOffice?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    facebook?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    instagram?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    youtube?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twitter?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    linkedIn?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
