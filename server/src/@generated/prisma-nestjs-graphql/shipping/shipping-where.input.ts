import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShippingWhereInput {

    @Field(() => [ShippingWhereInput], {nullable:true})
    AND?: Array<ShippingWhereInput>;

    @Field(() => [ShippingWhereInput], {nullable:true})
    OR?: Array<ShippingWhereInput>;

    @Field(() => [ShippingWhereInput], {nullable:true})
    NOT?: Array<ShippingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rateInsideDhaka?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rateOutsideDhaka?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rateInSavar?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    estimateDelivery?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
