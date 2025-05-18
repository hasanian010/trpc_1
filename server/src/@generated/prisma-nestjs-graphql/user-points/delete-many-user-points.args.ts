import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsWhereInput } from './user-points-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyUserPointsArgs {

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
