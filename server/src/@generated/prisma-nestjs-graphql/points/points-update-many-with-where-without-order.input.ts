import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsScalarWhereInput } from './points-scalar-where.input';
import { Type } from 'class-transformer';
import { PointsUpdateManyMutationInput } from './points-update-many-mutation.input';

@InputType()
export class PointsUpdateManyWithWhereWithoutOrderInput {

    @Field(() => PointsScalarWhereInput, {nullable:false})
    @Type(() => PointsScalarWhereInput)
    where!: PointsScalarWhereInput;

    @Field(() => PointsUpdateManyMutationInput, {nullable:false})
    @Type(() => PointsUpdateManyMutationInput)
    data!: PointsUpdateManyMutationInput;
}
