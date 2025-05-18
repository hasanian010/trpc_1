import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProvidersInput } from './user-create-without-providers.input';

@InputType()
export class UserCreateOrConnectWithoutProvidersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutProvidersInput, {nullable:false})
    @Type(() => UserCreateWithoutProvidersInput)
    create!: UserCreateWithoutProvidersInput;
}
