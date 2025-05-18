import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsUpdateManyMutationInput } from './points-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PointsWhereInput } from './points-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPointsArgs {

    @Field(() => PointsUpdateManyMutationInput, {nullable:false})
    @Type(() => PointsUpdateManyMutationInput)
    data!: PointsUpdateManyMutationInput;

    @Field(() => PointsWhereInput, {nullable:true})
    @Type(() => PointsWhereInput)
    where?: PointsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
