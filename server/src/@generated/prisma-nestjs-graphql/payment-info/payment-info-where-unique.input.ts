import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderScalarRelationFilter } from '../order/order-scalar-relation-filter.input';

@InputType()
export class PaymentInfoWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => [PaymentInfoWhereInput], {nullable:true})
    AND?: Array<PaymentInfoWhereInput>;

    @Field(() => [PaymentInfoWhereInput], {nullable:true})
    OR?: Array<PaymentInfoWhereInput>;

    @Field(() => [PaymentInfoWhereInput], {nullable:true})
    NOT?: Array<PaymentInfoWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    paymentMethod?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paymentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    provider?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderScalarRelationFilter, {nullable:true})
    order?: OrderScalarRelationFilter;
}
