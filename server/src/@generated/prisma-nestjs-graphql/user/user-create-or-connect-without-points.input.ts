import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPointsInput } from './user-create-without-points.input';

@InputType()
export class UserCreateOrConnectWithoutPointsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutPointsInput, {nullable:false})
    @Type(() => UserCreateWithoutPointsInput)
    create!: UserCreateWithoutPointsInput;
}
