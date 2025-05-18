import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProvidersInput } from './user-create-without-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProvidersInput } from './user-create-or-connect-without-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProvidersInput {

    @Field(() => UserCreateWithoutProvidersInput, {nullable:true})
    @Type(() => UserCreateWithoutProvidersInput)
    create?: UserCreateWithoutProvidersInput;

    @Field(() => UserCreateOrConnectWithoutProvidersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProvidersInput)
    connectOrCreate?: UserCreateOrConnectWithoutProvidersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
