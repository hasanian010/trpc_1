import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPointsInput } from './user-create-without-user-points.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPointsInput } from './user-create-or-connect-without-user-points.input';
import { UserUpsertWithoutUserPointsInput } from './user-upsert-without-user-points.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserPointsInput } from './user-update-to-one-with-where-without-user-points.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserPointsNestedInput {

    @Field(() => UserCreateWithoutUserPointsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPointsInput)
    create?: UserCreateWithoutUserPointsInput;

    @Field(() => UserCreateOrConnectWithoutUserPointsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPointsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPointsInput;

    @Field(() => UserUpsertWithoutUserPointsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserPointsInput)
    upsert?: UserUpsertWithoutUserPointsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserPointsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserPointsInput)
    update?: UserUpdateToOneWithWhereWithoutUserPointsInput;
}
