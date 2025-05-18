import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawWhereInput } from './withdraw-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SellerScalarRelationFilter } from '../seller/seller-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class WithdrawWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [WithdrawWhereInput], {nullable:true})
    AND?: Array<WithdrawWhereInput>;

    @Field(() => [WithdrawWhereInput], {nullable:true})
    OR?: Array<WithdrawWhereInput>;

    @Field(() => [WithdrawWhereInput], {nullable:true})
    NOT?: Array<WithdrawWhereInput>;

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

    @Field(() => SellerScalarRelationFilter, {nullable:true})
    seller?: SellerScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    releasedBy?: UserNullableScalarRelationFilter;
}
