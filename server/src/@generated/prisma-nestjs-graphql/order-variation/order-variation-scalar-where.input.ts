import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderVariationScalarWhereInput {

    @Field(() => [OrderVariationScalarWhereInput], {nullable:true})
    AND?: Array<OrderVariationScalarWhereInput>;

    @Field(() => [OrderVariationScalarWhereInput], {nullable:true})
    OR?: Array<OrderVariationScalarWhereInput>;

    @Field(() => [OrderVariationScalarWhereInput], {nullable:true})
    NOT?: Array<OrderVariationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    variant?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderProductId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
