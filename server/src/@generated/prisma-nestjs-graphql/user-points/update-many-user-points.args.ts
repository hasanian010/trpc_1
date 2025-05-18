import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsUpdateManyMutationInput } from './user-points-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserPointsWhereInput } from './user-points-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserPointsArgs {

    @Field(() => UserPointsUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPointsUpdateManyMutationInput)
    data!: UserPointsUpdateManyMutationInput;

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
