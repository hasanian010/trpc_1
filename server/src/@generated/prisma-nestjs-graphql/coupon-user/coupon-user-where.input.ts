import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CouponUserWhereInput {

    @Field(() => [CouponUserWhereInput], {nullable:true})
    AND?: Array<CouponUserWhereInput>;

    @Field(() => [CouponUserWhereInput], {nullable:true})
    OR?: Array<CouponUserWhereInput>;

    @Field(() => [CouponUserWhereInput], {nullable:true})
    NOT?: Array<CouponUserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discountUnit?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    points?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
