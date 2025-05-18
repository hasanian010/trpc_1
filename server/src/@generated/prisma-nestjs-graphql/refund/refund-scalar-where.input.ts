import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RefundScalarWhereInput {

    @Field(() => [RefundScalarWhereInput], {nullable:true})
    AND?: Array<RefundScalarWhereInput>;

    @Field(() => [RefundScalarWhereInput], {nullable:true})
    OR?: Array<RefundScalarWhereInput>;

    @Field(() => [RefundScalarWhereInput], {nullable:true})
    NOT?: Array<RefundScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
