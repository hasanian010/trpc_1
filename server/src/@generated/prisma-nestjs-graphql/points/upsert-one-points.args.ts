import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';
import { PointsCreateInput } from './points-create.input';
import { PointsUpdateInput } from './points-update.input';

@ArgsType()
export class UpsertOnePointsArgs {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => PointsCreateInput, {nullable:false})
    @Type(() => PointsCreateInput)
    create!: PointsCreateInput;

    @Field(() => PointsUpdateInput, {nullable:false})
    @Type(() => PointsUpdateInput)
    update!: PointsUpdateInput;
}
