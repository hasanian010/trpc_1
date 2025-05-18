import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsCreateManyUserInput } from './points-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PointsCreateManyUserInputEnvelope {

    @Field(() => [PointsCreateManyUserInput], {nullable:false})
    @Type(() => PointsCreateManyUserInput)
    data!: Array<PointsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
