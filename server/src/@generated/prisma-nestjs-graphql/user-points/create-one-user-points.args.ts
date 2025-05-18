import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsCreateInput } from './user-points-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserPointsArgs {

    @Field(() => UserPointsCreateInput, {nullable:false})
    @Type(() => UserPointsCreateInput)
    data!: UserPointsCreateInput;
}
