import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPointsCreateWithoutUserInput } from './user-points-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPointsCreateOrConnectWithoutUserInput } from './user-points-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';

@InputType()
export class UserPointsCreateNestedOneWithoutUserInput {

    @Field(() => UserPointsCreateWithoutUserInput, {nullable:true})
    @Type(() => UserPointsCreateWithoutUserInput)
    create?: UserPointsCreateWithoutUserInput;

    @Field(() => UserPointsCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserPointsCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserPointsCreateOrConnectWithoutUserInput;

    @Field(() => UserPointsWhereUniqueInput, {nullable:true})
    @Type(() => UserPointsWhereUniqueInput)
    connect?: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;
}
