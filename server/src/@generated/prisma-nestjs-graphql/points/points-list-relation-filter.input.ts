import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsWhereInput } from './points-where.input';

@InputType()
export class PointsListRelationFilter {

    @Field(() => PointsWhereInput, {nullable:true})
    every?: PointsWhereInput;

    @Field(() => PointsWhereInput, {nullable:true})
    some?: PointsWhereInput;

    @Field(() => PointsWhereInput, {nullable:true})
    none?: PointsWhereInput;
}
