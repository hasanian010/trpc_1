import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsCreateManyInput } from './points-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPointsArgs {

    @Field(() => [PointsCreateManyInput], {nullable:false})
    @Type(() => PointsCreateManyInput)
    data!: Array<PointsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
