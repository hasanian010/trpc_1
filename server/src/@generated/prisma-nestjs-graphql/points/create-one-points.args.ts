import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsCreateInput } from './points-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePointsArgs {

    @Field(() => PointsCreateInput, {nullable:false})
    @Type(() => PointsCreateInput)
    data!: PointsCreateInput;
}
