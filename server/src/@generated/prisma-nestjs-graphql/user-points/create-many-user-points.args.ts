import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsCreateManyInput } from './user-points-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserPointsArgs {

    @Field(() => [UserPointsCreateManyInput], {nullable:false})
    @Type(() => UserPointsCreateManyInput)
    data!: Array<UserPointsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
