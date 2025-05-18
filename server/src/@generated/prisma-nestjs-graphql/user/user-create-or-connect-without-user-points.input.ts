import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPointsInput } from './user-create-without-user-points.input';

@InputType()
export class UserCreateOrConnectWithoutUserPointsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutUserPointsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPointsInput)
    create!: UserCreateWithoutUserPointsInput;
}
