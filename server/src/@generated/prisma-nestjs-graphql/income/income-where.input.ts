import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SellerScalarRelationFilter } from '../seller/seller-scalar-relation-filter.input';
import { OrderScalarRelationFilter } from '../order/order-scalar-relation-filter.input';

@InputType()
export class IncomeWhereInput {

    @Field(() => [IncomeWhereInput], {nullable:true})
    AND?: Array<IncomeWhereInput>;

    @Field(() => [IncomeWhereInput], {nullable:true})
    OR?: Array<IncomeWhereInput>;

    @Field(() => [IncomeWhereInput], {nullable:true})
    NOT?: Array<IncomeWhereInput>;

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

    @Field(() => SellerScalarRelationFilter, {nullable:true})
    seller?: SellerScalarRelationFilter;

    @Field(() => OrderScalarRelationFilter, {nullable:true})
    order?: OrderScalarRelationFilter;
}
