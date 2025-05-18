import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';
import { Type } from 'class-transformer';
import { UserPointsCreateWithoutUserInput } from './user-points-create-without-user.input';

@InputType()
export class UserPointsCreateOrConnectWithoutUserInput {

    @Field(() => UserPointsWhereUniqueInput, {nullable:false})
    @Type(() => UserPointsWhereUniqueInput)
    where!: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => UserPointsCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPointsCreateWithoutUserInput)
    create!: UserPointsCreateWithoutUserInput;
}
