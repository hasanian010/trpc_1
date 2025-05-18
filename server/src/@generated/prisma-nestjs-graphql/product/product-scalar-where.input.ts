import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductScalarWhereInput {

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    mainCategoryId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    categoryId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    brandId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    unit?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    minPurchase?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    refundAble?: BoolFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    youtubeLink?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flashId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    price?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    quantity?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discountUnit?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    visibility?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isApproved?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    estimateDelivery?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    warranty?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    showStock?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    tax?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    taxUnit?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    totalPrice?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    disclaimer?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
