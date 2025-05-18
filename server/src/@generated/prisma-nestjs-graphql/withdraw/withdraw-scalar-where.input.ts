import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class WithdrawScalarWhereInput {

    @Field(() => [WithdrawScalarWhereInput], {nullable:true})
    AND?: Array<WithdrawScalarWhereInput>;

    @Field(() => [WithdrawScalarWhereInput], {nullable:true})
    OR?: Array<WithdrawScalarWhereInput>;

    @Field(() => [WithdrawScalarWhereInput], {nullable:true})
    NOT?: Array<WithdrawScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    releasedById?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    method?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
