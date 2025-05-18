import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderSellerScalarWhereInput {

    @Field(() => [OrderSellerScalarWhereInput], {nullable:true})
    AND?: Array<OrderSellerScalarWhereInput>;

    @Field(() => [OrderSellerScalarWhereInput], {nullable:true})
    OR?: Array<OrderSellerScalarWhereInput>;

    @Field(() => [OrderSellerScalarWhereInput], {nullable:true})
    NOT?: Array<OrderSellerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cancelBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
