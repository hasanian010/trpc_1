import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';
import { Type } from 'class-transformer';
import { UserPointsCreateInput } from './user-points-create.input';
import { UserPointsUpdateInput } from './user-points-update.input';

@ArgsType()
export class UpsertOneUserPointsArgs {

    @Field(() => UserPointsWhereUniqueInput, {nullable:false})
    @Type(() => UserPointsWhereUniqueInput)
    where!: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => UserPointsCreateInput, {nullable:false})
    @Type(() => UserPointsCreateInput)
    create!: UserPointsCreateInput;

    @Field(() => UserPointsUpdateInput, {nullable:false})
    @Type(() => UserPointsUpdateInput)
    update!: UserPointsUpdateInput;
}
