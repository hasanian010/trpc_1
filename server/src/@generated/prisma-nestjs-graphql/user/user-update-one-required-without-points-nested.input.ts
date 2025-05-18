import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPointsInput } from './user-create-without-points.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPointsInput } from './user-create-or-connect-without-points.input';
import { UserUpsertWithoutPointsInput } from './user-upsert-without-points.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPointsInput } from './user-update-to-one-with-where-without-points.input';

@InputType()
export class UserUpdateOneRequiredWithoutPointsNestedInput {

    @Field(() => UserCreateWithoutPointsInput, {nullable:true})
    @Type(() => UserCreateWithoutPointsInput)
    create?: UserCreateWithoutPointsInput;

    @Field(() => UserCreateOrConnectWithoutPointsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPointsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput;

    @Field(() => UserUpsertWithoutPointsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPointsInput)
    upsert?: UserUpsertWithoutPointsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPointsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPointsInput)
    update?: UserUpdateToOneWithWhereWithoutPointsInput;
}
