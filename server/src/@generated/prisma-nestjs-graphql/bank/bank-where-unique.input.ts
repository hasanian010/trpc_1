import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SellerNullableScalarRelationFilter } from '../seller/seller-nullable-scalar-relation-filter.input';

@InputType()
export class BankWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => [BankWhereInput], {nullable:true})
    AND?: Array<BankWhereInput>;

    @Field(() => [BankWhereInput], {nullable:true})
    OR?: Array<BankWhereInput>;

    @Field(() => [BankWhereInput], {nullable:true})
    NOT?: Array<BankWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    accNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    routing?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bankName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    branch?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SellerNullableScalarRelationFilter, {nullable:true})
    seller?: SellerNullableScalarRelationFilter;
}
