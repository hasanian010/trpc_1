import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsWhereInput } from './points-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPointsArgs {

    @Field(() => PointsWhereInput, {nullable:true})
    @Type(() => PointsWhereInput)
    where?: PointsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
