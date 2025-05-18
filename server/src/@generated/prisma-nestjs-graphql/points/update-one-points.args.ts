import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsUpdateInput } from './points-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';

@ArgsType()
export class UpdateOnePointsArgs {

    @Field(() => PointsUpdateInput, {nullable:false})
    @Type(() => PointsUpdateInput)
    data!: PointsUpdateInput;

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;
}
