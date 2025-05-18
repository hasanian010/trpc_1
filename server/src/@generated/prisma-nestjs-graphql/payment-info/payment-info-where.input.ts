import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderScalarRelationFilter } from '../order/order-scalar-relation-filter.input';

@InputType()
export class PaymentInfoWhereInput {

    @Field(() => [PaymentInfoWhereInput], {nullable:true})
    AND?: Array<PaymentInfoWhereInput>;

    @Field(() => [PaymentInfoWhereInput], {nullable:true})
    OR?: Array<PaymentInfoWhereInput>;

    @Field(() => [PaymentInfoWhereInput], {nullable:true})
    NOT?: Array<PaymentInfoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paymentMethod?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paymentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    provider?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderScalarRelationFilter, {nullable:true})
    order?: OrderScalarRelationFilter;
}
