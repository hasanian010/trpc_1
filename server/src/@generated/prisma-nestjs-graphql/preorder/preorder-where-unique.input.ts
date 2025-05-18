import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreorderWhereInput } from './preorder-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PreorderWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PreorderWhereInput], {nullable:true})
    AND?: Array<PreorderWhereInput>;

    @Field(() => [PreorderWhereInput], {nullable:true})
    OR?: Array<PreorderWhereInput>;

    @Field(() => [PreorderWhereInput], {nullable:true})
    NOT?: Array<PreorderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    productImage?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    productUrl?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
