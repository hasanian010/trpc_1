import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePointsOrThrowArgs {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;
}
