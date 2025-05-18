import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class FlashWhereInput {

    @Field(() => [FlashWhereInput], {nullable:true})
    AND?: Array<FlashWhereInput>;

    @Field(() => [FlashWhereInput], {nullable:true})
    OR?: Array<FlashWhereInput>;

    @Field(() => [FlashWhereInput], {nullable:true})
    NOT?: Array<FlashWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumb?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expires?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    discount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discountUnit?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
