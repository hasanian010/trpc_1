import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class IncomeScalarWhereInput {

    @Field(() => [IncomeScalarWhereInput], {nullable:true})
    AND?: Array<IncomeScalarWhereInput>;

    @Field(() => [IncomeScalarWhereInput], {nullable:true})
    OR?: Array<IncomeScalarWhereInput>;

    @Field(() => [IncomeScalarWhereInput], {nullable:true})
    NOT?: Array<IncomeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    income?: FloatNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    paySuccess?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
