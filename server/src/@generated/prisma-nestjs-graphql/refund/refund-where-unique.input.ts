import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RefundableScalarRelationFilter } from '../refundable/refundable-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class RefundWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RefundWhereInput], {nullable:true})
    AND?: Array<RefundWhereInput>;

    @Field(() => [RefundWhereInput], {nullable:true})
    OR?: Array<RefundWhereInput>;

    @Field(() => [RefundWhereInput], {nullable:true})
    NOT?: Array<RefundWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    refundableId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    quantity?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RefundableScalarRelationFilter, {nullable:true})
    refundable?: RefundableScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
