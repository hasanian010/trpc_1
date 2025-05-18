import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProvidersInput } from './user-update-without-providers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProvidersInput } from './user-create-without-providers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProvidersInput {

    @Field(() => UserUpdateWithoutProvidersInput, {nullable:false})
    @Type(() => UserUpdateWithoutProvidersInput)
    update!: UserUpdateWithoutProvidersInput;

    @Field(() => UserCreateWithoutProvidersInput, {nullable:false})
    @Type(() => UserCreateWithoutProvidersInput)
    create!: UserCreateWithoutProvidersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
