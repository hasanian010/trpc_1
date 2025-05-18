import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPointsInput } from './user-create-without-points.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPointsInput } from './user-create-or-connect-without-points.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPointsInput {

    @Field(() => UserCreateWithoutPointsInput, {nullable:true})
    @Type(() => UserCreateWithoutPointsInput)
    create?: UserCreateWithoutPointsInput;

    @Field(() => UserCreateOrConnectWithoutPointsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPointsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
