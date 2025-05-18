import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserPointsOrThrowArgs {

    @Field(() => UserPointsWhereUniqueInput, {nullable:false})
    @Type(() => UserPointsWhereUniqueInput)
    where!: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;
}
