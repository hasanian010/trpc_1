import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProvidersInput } from './user-update-without-providers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProvidersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProvidersInput, {nullable:false})
    @Type(() => UserUpdateWithoutProvidersInput)
    data!: UserUpdateWithoutProvidersInput;
}
