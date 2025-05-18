import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RefundableScalarWhereInput {

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    AND?: Array<RefundableScalarWhereInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    OR?: Array<RefundableScalarWhereInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    NOT?: Array<RefundableScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderProductId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    quantity?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sellerId?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    couponDiscount?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    amount?: FloatNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
