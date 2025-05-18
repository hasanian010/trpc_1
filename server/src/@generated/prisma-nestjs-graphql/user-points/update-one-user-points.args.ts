import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsUpdateInput } from './user-points-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';

@ArgsType()
export class UpdateOneUserPointsArgs {

    @Field(() => UserPointsUpdateInput, {nullable:false})
    @Type(() => UserPointsUpdateInput)
    data!: UserPointsUpdateInput;

    @Field(() => UserPointsWhereUniqueInput, {nullable:false})
    @Type(() => UserPointsWhereUniqueInput)
    where!: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;
}
