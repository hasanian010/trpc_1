import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponAdminWhereInput } from './coupon-admin-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CouponAdminWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CouponAdminWhereInput], {nullable:true})
    AND?: Array<CouponAdminWhereInput>;

    @Field(() => [CouponAdminWhereInput], {nullable:true})
    OR?: Array<CouponAdminWhereInput>;

    @Field(() => [CouponAdminWhereInput], {nullable:true})
    NOT?: Array<CouponAdminWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discountUnit?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    minimumPurchase?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expires?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
