import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPointsWhereInput } from './user-points-where.input';

@InputType()
export class UserPointsNullableScalarRelationFilter {

    @Field(() => UserPointsWhereInput, {nullable:true})
    is?: UserPointsWhereInput;

    @Field(() => UserPointsWhereInput, {nullable:true})
    isNot?: UserPointsWhereInput;
}
