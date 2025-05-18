import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PointsScalarWhereInput {

    @Field(() => [PointsScalarWhereInput], {nullable:true})
    AND?: Array<PointsScalarWhereInput>;

    @Field(() => [PointsScalarWhereInput], {nullable:true})
    OR?: Array<PointsScalarWhereInput>;

    @Field(() => [PointsScalarWhereInput], {nullable:true})
    NOT?: Array<PointsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    points?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
