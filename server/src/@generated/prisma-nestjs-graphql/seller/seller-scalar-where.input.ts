import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SellerScalarWhereInput {

    @Field(() => [SellerScalarWhereInput], {nullable:true})
    AND?: Array<SellerScalarWhereInput>;

    @Field(() => [SellerScalarWhereInput], {nullable:true})
    OR?: Array<SellerScalarWhereInput>;

    @Field(() => [SellerScalarWhereInput], {nullable:true})
    NOT?: Array<SellerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shopName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logo?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    banner?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    metaTitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    metaDescription?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBanned?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalReview?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalRating?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
