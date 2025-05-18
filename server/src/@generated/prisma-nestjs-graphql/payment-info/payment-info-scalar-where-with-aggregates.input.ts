import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PaymentInfoScalarWhereWithAggregatesInput {

    @Field(() => [PaymentInfoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentInfoScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentInfoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentInfoScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentInfoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentInfoScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    paymentMethod?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    paymentId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    provider?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    orderId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
