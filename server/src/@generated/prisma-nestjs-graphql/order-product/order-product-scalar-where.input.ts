import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderProductScalarWhereInput {

    @Field(() => [OrderProductScalarWhereInput], {nullable:true})
    AND?: Array<OrderProductScalarWhereInput>;

    @Field(() => [OrderProductScalarWhereInput], {nullable:true})
    OR?: Array<OrderProductScalarWhereInput>;

    @Field(() => [OrderProductScalarWhereInput], {nullable:true})
    NOT?: Array<OrderProductScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    tax?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderSellerId?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    refundableIds?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
