import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class UserPointsWhereInput {

    @Field(() => [UserPointsWhereInput], {nullable:true})
    AND?: Array<UserPointsWhereInput>;

    @Field(() => [UserPointsWhereInput], {nullable:true})
    OR?: Array<UserPointsWhereInput>;

    @Field(() => [UserPointsWhereInput], {nullable:true})
    NOT?: Array<UserPointsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    points?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
