import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProvidersInput } from './user-create-without-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProvidersInput } from './user-create-or-connect-without-providers.input';
import { UserUpsertWithoutProvidersInput } from './user-upsert-without-providers.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProvidersInput } from './user-update-to-one-with-where-without-providers.input';

@InputType()
export class UserUpdateOneWithoutProvidersNestedInput {

    @Field(() => UserCreateWithoutProvidersInput, {nullable:true})
    @Type(() => UserCreateWithoutProvidersInput)
    create?: UserCreateWithoutProvidersInput;

    @Field(() => UserCreateOrConnectWithoutProvidersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProvidersInput)
    connectOrCreate?: UserCreateOrConnectWithoutProvidersInput;

    @Field(() => UserUpsertWithoutProvidersInput, {nullable:true})
    @Type(() => UserUpsertWithoutProvidersInput)
    upsert?: UserUpsertWithoutProvidersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProvidersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProvidersInput)
    update?: UserUpdateToOneWithWhereWithoutProvidersInput;
}
