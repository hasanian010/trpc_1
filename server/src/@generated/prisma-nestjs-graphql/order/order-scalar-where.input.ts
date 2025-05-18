import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderScalarWhereInput {

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    couponDiscount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    total?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    subtotal?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    shippingFees?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    shippingCount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    estimateDelivery?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingAddressId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billingAddressId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    paymentStatus?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
